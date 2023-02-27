import { createContext, useReducer, useEffect } from "react";
import { useCookies } from "react-cookie";
import { authReducer } from "./AuthReducer";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookie] = useCookies(["user"]);
  const initialAuthState = { user: null };

  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    if (cookie.user !== "undefined") {
      authDispatch({ type: "LOGIN", payload: cookie.user });
    }
  }, [cookie]);

  return (
    <AuthContext.Provider value={{ ...authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
