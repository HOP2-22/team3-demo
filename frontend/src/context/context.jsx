import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export const Provider = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);

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
      setCurrentUser(user);
    };
    getUser();
  }, []);

  return (
    <Context.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </Context.Provider>
  );
};
