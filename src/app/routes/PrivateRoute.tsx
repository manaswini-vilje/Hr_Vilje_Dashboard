import { Navigate, useLocation } from "react-router-dom";

type Role = "employee" | "hr" | "admin";

interface PrivateRouteProps {
  children: JSX.Element;
  allowedRoles: Role[];
}

export default function PrivateRoute({
  children,
  allowedRoles,
}: PrivateRouteProps) {
  const location = useLocation();

  const isAuthenticated =
    localStorage.getItem("isAuthenticated") === "true";
  const role = localStorage.getItem("userRole") as Role | null;

  // Not logged in → login
  if (!isAuthenticated || !role) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but wrong role → redirect to own dashboard
  if (!allowedRoles.includes(role)) {
    return <Navigate to={`/${role}`} replace />;
  }

  // Authorized
  return children;
}