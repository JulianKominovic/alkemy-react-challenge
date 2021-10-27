import { Redirect } from "react-router";
import useAuthentication from "../hooks/useAuthentication";

interface AuthComponentProps {
  children: JSX.Element | JSX.Element[];
}

const AuthRouteComponent = ({ children }: AuthComponentProps) => {
  const { isAuth } = useAuthentication();
  return <>{!isAuth ? <Redirect to="/login" /> : children}</>;
};

export default AuthRouteComponent;
