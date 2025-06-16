import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  // Jika tidak ada token → redirect ke login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Jika ada token → izinkan akses
  return children;
}