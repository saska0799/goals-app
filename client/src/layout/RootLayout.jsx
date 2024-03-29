import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
