import React, { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = ({ children }) => {
  const [info, setInfo] = useState("sdfgdfdfg");
  return <Context.Provider value={{ info }}>{children}</Context.Provider>;
};
