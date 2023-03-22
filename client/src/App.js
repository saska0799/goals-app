import { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AuthContext from "./context/auth/AuthContext";

import Home from "./pages/Home/index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={user ? <Home /> : <Navigate to="login" />} />
        <Route path="/">
          <Route
            path="login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
