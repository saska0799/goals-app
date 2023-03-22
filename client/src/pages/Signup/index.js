import { useContext, useState } from "react";
import { useRef } from "react";
import { useCookies } from "react-cookie";
import AuthContext from "../../context/auth/AuthContext";
import { getFetch } from "../../lib/fetch";
import AuthForm from "../../components/form/AuthForm";

const Signup = () => {
  const { authDispatch } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [cookie, setCookie] = useCookies(["user"]);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const ref = { usernameRef, emailRef, passwordRef };

  const formSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const user = { username, email, password };

    await getFetch(process.env.REACT_APP_SIGNUP, {
      method: "post",
      data: user,
    })
      .then((user) => {
        setCookie("user", user, {
          path: "/",
        });
        authDispatch({ type: "LOGIN", payload: cookie });
      })
      .catch((err) => setError("Something went wrong, please try again"));
  };

  return <AuthForm formSubmit={formSubmit} error={error} ref={ref} />;
};

export default Signup;
