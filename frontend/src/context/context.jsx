import React, { createContext, useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";

export const Context = createContext({});

export const Provider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
