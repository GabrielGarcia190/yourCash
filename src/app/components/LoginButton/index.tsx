import { signIn } from "next-auth/react";
import Image from "next/image";

type Button =
    {
        ProviderName: "GitHub" | "Google"
        Logo: "/GithubLogo.svg" | "/GoogleLogo.svg"
        widht: number,
        height: number
    }

export function LoginButton(props: Button) {
    return (
        <div className="w-1/5 border border-1 py-2 rounded-md flex flex-row justify-center">
            <Image
                src={props.Logo}
                height={props.widht}
                width={props.height}
                alt="Botão de Login"

            />
            <button
             className="pl-2"
                onClick={() => signIn(props.ProviderName.toLowerCase(), { callbackUrl: "/" })}>
                Continuar com {props.ProviderName}
            </button>
        </div>
    )
}