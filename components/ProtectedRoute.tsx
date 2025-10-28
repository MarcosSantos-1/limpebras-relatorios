"use client";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireHost?: boolean;
  requireAdmin?: boolean;
}

export function ProtectedRoute({ children, requireHost = false, requireAdmin = false }: ProtectedRouteProps) {
  // Autenticação desabilitada - sempre renderizar children
  return <>{children}</>;
}
