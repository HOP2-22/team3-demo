import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';

export const ArtistContext = createContext({});

export const ArtistProvider = ({ children }) => {
  const [isArtist, setIsArtist] = useState(false);
  const [user, setUser] = useState(null);

  const router = useRouter()
  const { push } = router

  axios.interceptors.request.use(
    function (config) {
      const token = Cookies.get("token");
      config.headers.token = token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  const logOut = () => {
    setUser(null);
    Cookies.remove("token");
    push("/");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) return;

        const { data } = await axios.get("http://localhost:7070/user/getUser");

        if (data.data.data.exp * 1000 <= Date.now()) {
          logOut();
          return;
        }

        console.log(data?.user);

        setUser(data?.user);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <ArtistContext.Provider
      value={{
        setUser,
        user,

        isArtist,
        setIsArtist,

        logOut,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};
