import React, { Children } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
