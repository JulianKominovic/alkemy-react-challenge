import { useState } from "react";
import { Formik } from "formik";
import { authUser } from "../services/loginApi";
import useAuthentication from "../hooks/useAuthentication";
import AuthInputGroup from "./AuthInputGroup";
import { SignupSchema } from "../schemas/YupSchemas";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router";

interface ResponseAuthTemplate {
  token?: string;
}

const AuthForm = () => {
  const { setUser, authorizeUser } = useAuthentication();
  const [showErrorLogging, setShowErrorLogging] = useState<boolean>(false);
  const [sendingAuthData, setSendingAuthData] = useState<boolean>(false);
  const history = useHistory();
  return (
    <>
      {!sendingAuthData ? (
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={({ email, password }) => {
            setSendingAuthData(true);
            authUser(email, password).then((res) => {
              const castedResponse = res as ResponseAuthTemplate;
              if (castedResponse.token !== undefined) {
                authorizeUser(castedResponse.token);
                history.replace("/");
              } else {
                setShowErrorLogging(true);
                setSendingAuthData(false);
              }
            });
          }}
          validationSchema={SignupSchema}
        >
          {(props) => (
            <AuthInputGroup
              {...props}
              showErrorLogging={showErrorLogging}
              setUser={setUser}
            />
          )}
        </Formik>
      ) : (
        <Spinner animation="border" role="status" className="align-self-center">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default AuthForm;
