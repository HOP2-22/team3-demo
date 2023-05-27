import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ArtistContext } from "./Artistcontext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const { user, setUser, logOut } = useContext(ArtistContext);

  const [isClient, setIsClient] = useState(false);

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      if (token) {
        config.headers.set("token", token);
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:7070/user/getUser");

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
    };
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isClient,
        setIsClient,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
