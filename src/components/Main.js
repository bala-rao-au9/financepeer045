import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/LoginActions";
import Fileupload from "./Fileupload";
import About from "./About";
import "../css/main.css";

export default function Main() {
  const history = useHistory();

  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => state.loginInfo);

  if (loginInfo.loggedInStatus === false) {
    history.push("/");
  }

  const weatherInfo = useSelector((state) => state.weatherInfo);

  const Logout = () => {
    dispatch(logout(false));
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  return (
    <div>
      <div className="main_header">
        <div className="main_title">
          <h1>Financepeer App</h1>
        </div>
        <div className="main_btn">
          <button className="logout_btn" onClick={Logout}>
            Logout
          </button>
        </div>
      </div>
      <Fileupload />
      <About />
    </div>
  );
}
