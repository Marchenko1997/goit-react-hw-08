import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

// Компонент для ограничения доступа к страницам для авторизованных пользователей
export const RestrictedRoute = ({ component, redirectTo = "/contacts" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("Restricted Route isLoggedIn:", isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
