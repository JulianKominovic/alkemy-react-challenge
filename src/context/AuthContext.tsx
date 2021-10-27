import React, { useState, createContext } from "react";

interface AuthInterface {
  userName: string;
  setUserName: (user: string) => void;
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
}

const isAnyTokenOnLS = () => {
  return window.localStorage.getItem("token") !== null;
};

export const AuthContext = createContext<AuthInterface>({
  userName: "",
  setUserName: (user: string) => console.log("Auth context"),
  isAuth: isAnyTokenOnLS(),
  setIsAuth: (isAuth: boolean) => console.log("Is Auth"),
});

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [userName, setUserName] = useState<string>("");
  const [isAuth, setIsAuth] = useState(isAnyTokenOnLS());
  return (
    <AuthContext.Provider value={{ userName, setUserName, isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
