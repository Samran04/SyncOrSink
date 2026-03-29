"use client";

import { AuthProvider } from "@/lib/AuthContext";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Navbar />
      {children}
    </AuthProvider>
  );
}
