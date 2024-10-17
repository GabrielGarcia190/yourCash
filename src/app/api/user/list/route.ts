import { db } from "@/database/db";
import { IResponseData } from "@/interfaces/IResponseDate";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";

export async function GET(req: Request) {
    try {

        const users = await db.user.findMany();
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({
                sucesso: false,
                message: "Usuário não está autenticado...",
            }, { status: 401 });
        }

        return NextResponse.json({
            success: true,
            data: users,
            message: "Usuários obtidos com sucesso.",
        } as IResponseData, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            success: false,
            data: null,
            message: "Não foi possível obter os dados dos usuários.",
            error: String(error),
        } as IResponseData, { status: 500 });
    }
}
