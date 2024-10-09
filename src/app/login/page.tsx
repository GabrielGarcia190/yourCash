"use client"

import { signIn } from "next-auth/react";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <button className="bg-red-500 text-white font-semibold" 
            onClick={() => signIn("github", {callbackUrl: "/"})}>
                Login com GitHub</button>
      </div >
    );
}
