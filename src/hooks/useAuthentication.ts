import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuthentication() {
  const { isAuth, setIsAuth, setUserName, userName } = useContext(AuthContext);

  const authorizeUser = (token: string) => {
    window.localStorage.setItem("token", token);
    setIsAuth(true);
  };
  const setUser = (name: string) => setUserName(name);
  return {
    userName,
    isAuth,
    authorizeUser,
    setUser,
  };
}
