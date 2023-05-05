import React, { Children, useContext } from "react";
import Header from "../components/layout/header";
import ArtistHeader from "../components/ArtistHeader";
import Footer from "../components/layout/Footer";
import HeaderHidden from "../components/layout/HeaderHidden";
import { Context } from "@/context/context";

function Layout({ children }) {
  const { isClient, isArtist } = useContext(Context);

  return (
    <div>
      <Header />
      <ArtistHeader />

      {children}
      <HeaderHidden />
      <Footer />
    </div>
  );
}
export default Layout;
