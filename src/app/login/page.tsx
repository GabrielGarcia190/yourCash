"use client"

import { LoginButton } from "../components/LoginButton";

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
           <LoginButton ProviderName="GitHub"/>
      </div >
    );
}
