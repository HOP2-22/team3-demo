import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [isClient, setIsClient] = useState(true);
  const [isArtist, setIsArtist] = useState(false);

  const [user, setUser] = useState("");
  console.log(user + "is user");
  const [artist, setArtist] = useState("");

  console.log(artist + "is artist");

  useEffect(() => {
    try {
      //exp gj bhguenshd
      // if (data.data.data.exp * 1000 <= Date.now()) {
      //   logOut();
      //   return;
      // }

      // console.log(data.data);
      setUser(data?.user);
    } catch (error) {
      console.log(error);
    }
    getUser();
  }, []);

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
