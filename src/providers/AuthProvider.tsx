import React, { ReactNode, createContext, useEffect, useState } from "react";

type providerProps = {
  children: ReactNode;
};

export const AuthContext = createContext({
  isLogin: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<providerProps> = (props) => {
  const [isLogin, setLogin] = useState(false);

  const login = () => {
    setLogin(true);
    localStorage.setItem("login", "true");
  };

  const logout = () => {
    setLogin(false);
    localStorage.setItem("login", "false");
  };

  const initialize = () => {
    const l = localStorage.getItem("login");
    if (l) {
      setLogin(JSON.parse(l));
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
