import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export const Provider = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [artistname, setArtistName] = useState();

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
      setArtistName(res?.data?.user?.name);
      console.log(user);

      setCurrentUser(user);
    };
    getUser();
  }, []);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
