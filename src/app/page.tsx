"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import PrivateRote from "./components/PrivateRote";
import { ApiResponse, userResponseSchema } from "./schemas/userReponseSchema";

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null);  // Usando o tipo inferido para a resposta da API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/user/list')
      .then((response) => {
        // Validar os dados com o esquema Zod
        try {
          const parsedData = userResponseSchema.parse(response.data);  // Valida e tipa os dados automaticamente
          setData(parsedData);
        } catch (validationError) {
          console.error("Erro de validação:", validationError);
          setError("Os dados recebidos estão em um formato inválido.");
        } finally {
          setLoading(false);
        }
      })
      .catch((fetchError) => {
        console.error("Erro ao buscar dados:", fetchError);
        setError("Não foi possível buscar os dados.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Sem dados</p>;

  return (
    <PrivateRote>
      <div className="items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {data.data?.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg w-full max-w-md mb-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-700">Autor: {item.email}</p>
            <p className="text-sm text-gray-500 mt-2">
              Criado em: 
              <span className="pl-1"></span>
              {new Date(item.createdAt).toLocaleString('pt-BR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>
        ))}
      </div>
    </PrivateRote>
  );
}
