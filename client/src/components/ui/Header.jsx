import { useContext, useMemo, useEffect, useState, useCallback } from "react";
import { useCookies } from "react-cookie";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AuthContext from "../../context/auth/AuthContext";
import ModalContext from "../../context/modal/ModalContext";
import HeaderImg from "../../assets/header.jpg";
import { generateRandomNumber } from "../../utils/randomNumber";
import { formatDate } from "../../utils/formatDate";
import GoalContext from "../../context/goal/GoalContext";
import { getFetch } from "../../lib/fetch";
import Button from "./Button";

const Header = () => {
  const [quotes, setQuotes] = useState([]);
  const { modalDispatch } = useContext(ModalContext);
  const { authDispatch } = useContext(AuthContext);
  const { goalDispatch } = useContext(GoalContext);
  const [cookie, removeCookie] = useCookies(["user"]);

  const quotesLength = quotes.length;
  const randomNumber = useMemo(
    () => generateRandomNumber(quotesLength),
    [quotesLength]
  );
  const formattedDate = formatDate();

  const fetchQuotes = useCallback(async () => {
    getFetch("quotes.json").then((quotes) => setQuotes(quotes.quotes));
  }, []);

  const handleLogout = () => {
    removeCookie("user");
    authDispatch({ type: "LOGOUT" });
    goalDispatch({ type: "GET_GOALS", payload: [] });
  };

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return (
    <header>
      <img
        src={HeaderImg}
        alt="header anime wallpaper"
        className="h-[80vh] w-full object-cover position-center absolute"
      />
      <div className="h-[80vh] relative flex flex-col justify-between md:p-24 sm:p-16 p-8">
        <div className="flex justify-between items-center">
          <AiOutlinePlusCircle
            className="md:w-[5rem] w-[3rem] h-auto cursor-pointer"
            color="white"
            onClick={() => modalDispatch({ type: "OPEN_MODAL", payload: true })}
          />
          {cookie.user && cookie.user !== "undefined" && (
            <div className="flex items-center">
              <h3 className="mr-5 text-slate-200 lg:text-3xl sm:text-2xl text-xl">
                Hello {cookie.user.user.username}
              </h3>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center text-slate-200 lg:text-4xl md:text-3xl sm:text-2xl text-xl">
          <p>{formattedDate}</p>
          <h3 className="w-[70%]  text-end">
            {quotes && quotes[randomNumber]}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
