import { Suspense } from "react";
import PropTypes from "prop-types";
import { AppBar } from "./AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />

      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired, 
  };