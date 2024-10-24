import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const buildAuthContainerClasses = ({ isActive }) => {
  return clsx(css.authlink, isActive && css.active);
};

export const AuthNav = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <NavLink
        to="/register"
        className={buildAuthContainerClasses}
        onClick={() => console.log("Navigating to register")}
        style={{ textDecoration: "none", color: "primary.main" }}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={buildAuthContainerClasses}
        onClick={() => console.log("Navigating to login")}
        style={{ textDecoration: "none", color: "primary.main" }}
      >
        Log In
      </NavLink>
    </Box>
  );
};
