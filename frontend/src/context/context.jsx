import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export const Provider = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUserName] = useState();
  const [isClient, setIsClient] = useState(true);
  const [isArtist, setIsArtist] = useState(false);
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

  useEffect(() => {
    const getUser = async () => {
      const token = Cookies.get("token");

      if (!token) return;
      const user = Cookies.get("user");
      const res = await axios.get("http://localhost:7070/user/getUser");
      setUserName(res?.data?.user?.name);

      setCurrentUser(user);
    };
    getUser();
  }, []);

  return (
    <Context.Provider
      value={{
        currentUser,
        setCurrentUser,
        setUserName,
        username,
        isClient,
        setIsClient,
        isArtist,
        setIsArtist,
      }}>
      {children}
    </Context.Provider>
  );
};
