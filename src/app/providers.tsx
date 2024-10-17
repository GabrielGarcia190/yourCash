"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function Session({ children }: { children: ReactNode }) {
    return <SessionProvider>{children}</SessionProvider>;
}
