import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const buildAuthContainerClasses = ({ isActive }) => {
  return clsx(css.authlink, isActive && css.active);
};

export const AuthNav = () => {
 

  return (
    <div className={css.authcontainer}>
      <NavLink className={buildAuthContainerClasses } to="/register">
        Register
      </NavLink>
      <NavLink className={buildAuthContainerClasses } to="/login">
        Log In
      </NavLink>
    </div>
  );
};
