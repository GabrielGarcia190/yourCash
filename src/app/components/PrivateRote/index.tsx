"use client"
import { SessionProvider, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";


export default function PrivateRote({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
           redirect("/login");
        }
    }, [status]);

    if (status === 'loading') {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-black border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
