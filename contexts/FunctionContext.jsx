import React, { createContext, useState, useEffect, useContext } from "react";
import { getPrivateCloset } from "../services/closetService";
import { getPublicCloset } from "../services/publicClosetService";
import { postLogin } from "../services/loginService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [closet, setCloset] = useState([]);
  const [publicClothes, setPublicClothes] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (username, password) => {
    const tokenLogin = await postLogin(username, password);

    if (!tokenLogin) return false;
    localStorage.setItem("token", tokenLogin);
    setToken(tokenLogin);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  useEffect(() => {
    const fetchPublicCloset = async () => {
      try {
        const data = await getPublicCloset();
        setPublicClothes(data);
        console.log("data en getpubliccloset es: ", data);

        setIsLoading(false);
      } catch (error) {
        console.log("error en fetchPublicCloset: ", error);
      }
    };

    fetchPublicCloset();
  }, [refresh]);

  useEffect(() => {
    const fetchCloset = async () => {
      try {
        const data = await getPrivateCloset();
      
        setCloset(data.closet);
        setIsLoading(false);
      } catch (error) {
        console.error("error en fetchCloset: ", error);
      }
    };
    fetchCloset();
  }, [refresh]);

  const state = {
    logout,
    login,
    token,
    closet,
    setCloset,
    refresh,
    setRefresh,
    isLoading,
    publicClothes,
  };
  console.log('valor de closet?? ', closet);

  // []
  // []
  // [contenido]         
    

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const useAppContext = () => useContext(AuthContext);
