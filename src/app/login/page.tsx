"use client"

import { LoginButton } from "../components/LoginButton";
import { NavBar } from "../components/NavBar";

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)] flex justify-center items-center w-full h-screen">
            <NavBar />
            <div className="flex flex-col w-full h-full items-center justify-center">
                <h1 className="pb-20">
                    <span className="font-bold text-3xl">
                        Organizou, prosperou.
                    </span>
                    <br />
                    <span className="text-2xl text-[#B7A4BF]">
                        Faça login no yourCash e
                        <br />
                        começe a  se organizar
                    </span>
                </h1>
                <div className="flex flex-col gap-2 w-full items-center">
                <LoginButton ProviderName="GitHub" Logo="/GithubLogo.svg" widht={20} height={20} />
                <LoginButton ProviderName="Google" Logo="/GoogleLogo.svg" widht={30} height={30}/>
                </div>
                <p className="text-center pt-60">
                    Seu nome, e-mail, e foto serão armazenados,<br />
                    porém não serão exibidos para outros usuários.<br />
                    Ao continuar, você concorda com nossos <a href="" className="text-blue-400">Termos<br />
                        e Condições</a> e com a nossa <a href="" className="text-blue-400">Política  de Privacidade </a></p>
            </div>
        </div >
    );
}
