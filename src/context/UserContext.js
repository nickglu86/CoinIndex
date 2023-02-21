import { createContext, useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

export const UserContext = createContext({ isLoggedIn: false });

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const _login = () => {
    setIsLoggedIn(true);
  };

  const _logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, _login, _logout }}>
      {children}
    </UserContext.Provider>
  );
};
