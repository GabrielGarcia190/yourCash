import { createUserSchema } from "@/app/schemas/userSchema";
import { db } from "@/database/db";
import { IResponseData } from "@/interfaces/IResponseDate";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const userData = createUserSchema.parse(body);

        const existingUser = await db.user.findFirst({
            where: { email: userData.email },
        });

        if (existingUser) {
            return NextResponse.json({
                success: false,
                data: null,
                message: "Usuário já existe com este e-mail.",
            } as IResponseData, { status: 400 });
        }

        const newUser = await db.user.create({
            data: userData,
        });

        return NextResponse.json({
            success: true,
            data: newUser,
            message: "Usuário criado com sucesso.",
        } as IResponseData, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            success: false,
            data: null,
            message: "Erro ao criar o usuário.",
            error: String(error),
        } as IResponseData, { status: 500 });
    }
}

