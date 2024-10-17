import { signIn } from "next-auth/react";
import Image from "next/image";

type Button =
    {
        ProviderName: "gitHub" | "google"
        Logo: "/GithubLogo.svg" | "/GoogleLogo.svg"
        widht: number,
        height: number
    }

export function LoginButton(props: Button) {
    return (
        <button
            onClick={() => signIn(props.ProviderName, { callbackUrl: "/api/auth/login-callback" })}
            className="w-1/5 border border-1 py-2 rounded-md flex flex-row justify-center items-center">
            <Image
                src={props.Logo}
                height={props.widht}
                width={props.height}
                alt="Botão de Login"
            />
            <p className="pl-2">
                Continuar com {props.ProviderName}
            </p>
        </button>
    )
}