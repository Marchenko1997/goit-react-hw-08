import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css.authcontainer}>
      <NavLink className={css.authlink} to="/register">
        Register
      </NavLink>
      <NavLink className={css.authlink} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
