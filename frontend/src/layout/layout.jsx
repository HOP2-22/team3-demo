import React, { Children } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import HeaderHidden from "../components/HeaderHidden";

function Layout({ children }) {
  return (
    <div className="">
      <Header />
      {children}
      <div className="w-full h-[1500px] bg-red-900">fdfgfd</div>

      <HeaderHidden />
      <Footer />
    </div>
  );
}
export default Layout;
