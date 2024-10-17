"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { ApiResponse, userResponseSchema } from "./schemas/userReponseSchema";
import { useAuthenticated } from "@/hooks/useAuthenticated ";
import Image from "next/image";

export default function Home() {
  const isAuthenticated = useAuthenticated();
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {


    axios.get('/api/user/list')
      .then((response) => {
        try {
          const parsedData = userResponseSchema.parse(response.data);
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
    <div className="items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {data.data?.map((item, index) => (
        <div key={index} className="flex flex-row bg-gray-100 p-4 rounded-lg shadow-lg w-full max-w-md mb-4">
          <div className="w-1/6 pr-2 flex items-center justify-center rounded-full">
            <img
              src={item.imageUrl ?? ""}
              width={100}
              height={100}
              alt="Imagem de perfil"
              className="rounded-full"
            />
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">Nome: {item.name}</h3>
            <p className="text-sm text-gray-700">Email: {item.email}</p>
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
        </div>

      ))}
    </div>
  );
}
