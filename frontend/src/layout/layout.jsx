import React, { Children } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import HeaderHidden from "../components/HeaderHidden";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <HeaderHidden />
      <Footer />
    </div>
  );
}
export default Layout;
