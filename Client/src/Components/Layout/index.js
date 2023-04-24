import React from "react";
import SideNav from "../Sidebar";

function Layout({ children }) {
  return (
    <>
      <SideNav children={children} />
    </>
  );
}

export default Layout;
