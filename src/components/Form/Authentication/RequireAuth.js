import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth-Context";

export function RequireAuth({ children }) {
  const location = useLocation();
  const {login} = useAuth();
  return login ? children : <Navigate to="/Login"  state={{from : location}} replace />;
}
