import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuthenticated = () => {
  const { status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
        redirect("/login");
    } else if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  return isAuthenticated;
};