import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import PropTypes from "prop-types";
import DrawerAppBar  from "./DrawerAppBar/DrawerAppBar";

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <DrawerAppBar />

      <Suspense fallback={null}>
        {children}
        <Outlet />
      </Suspense>
    </div>
  );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired, 
  };