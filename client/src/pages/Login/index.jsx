import { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useCookies } from "react-cookie";
import AuthForm from "../../components/form/AuthForm";

import AuthContext from "../../context/auth/AuthContext";
import { getFetch } from "../../lib/fetch";

const Login = () => {
  const [error, setError] = useState(false);
  const { authDispatch } = useContext(AuthContext);
  const [cookie, setCookie] = useCookies(["user"]);

  const emailRef = useRef();
  const passwordRef = useRef();

  const ref = { emailRef, passwordRef };

  const formSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const user = { email, password };

    await getFetch(process.env.REACT_APP_LOGIN, {
      method: "post",
      data: user,
    })
      .then((user) => {
        setCookie("user", user, {
          path: "/",
        });
        authDispatch({ type: "LOGIN", payload: user });
      })
      .catch((err) => {
        setError(
          "Something went wrong! Please check your credentials and try again"
        );
      });
  };

  return <AuthForm formSubmit={formSubmit} error={error} ref={ref} />;
};

export default Login;
