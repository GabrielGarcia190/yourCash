import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import axios from "axios"; // Para fazer a requisição HTTP
import { authOptions } from "../[...nextauth]/authOptions";
import { IResponseData } from "@/interfaces/IResponseDate";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({
        success: false,
        message: "Usuário não está autenticado...",
      } as IResponseData, { status: 401 });
    }

    const { email, name, image } = session.user!;
    
    const response = await axios.post(`${process.env.NEXTAUTH_URL}/api/user/register`, {
      email,
      name,
      imageUrl: image,
    });

    if (!response.data.success) {
      return NextResponse.json({
        success: false,
        message: response.data.message,
      } as IResponseData, { status: 400 });
    }

    return NextResponse.redirect(process.env.NEXTAUTH_URL ?? "");

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Erro ao processar a solicitação.",
      error: String(error),
    } as IResponseData, { status: 500 });
  }
}
