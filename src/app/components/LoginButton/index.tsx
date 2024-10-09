import { signIn } from "next-auth/react";

type Button =
    {
        ProviderName: "GitHub" | "Google"
    }

export function LoginButton(props: Button) {
    return (
        <button
        className=""
            onClick={() => signIn(props.ProviderName.toLowerCase(), { callbackUrl: "/" })}>
            Logar com {props.ProviderName}
        </button>
    )
}