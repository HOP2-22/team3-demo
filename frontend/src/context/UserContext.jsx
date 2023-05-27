import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [isClient, setIsClient] = useState(true);
  const [isArtist, setIsArtist] = useState(false);

  const [user, setUser] = useState("");

  const [artist, setArtist] = useState("");

  const [productIfo, setProductIfo] = useState();

  return (
    <UserContext.Provider
      value={{
        isClient,
        setIsClient,
        isArtist,
        setIsArtist,
        user,
        setUser,
        artist,
        setArtist,
        productIfo,
        setProductIfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
