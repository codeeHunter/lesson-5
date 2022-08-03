import "./App.css";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Game from "./Components/Game/Game";
import Profile from "./Components/Profile/Profile";
import { useNavigate } from "react-router-dom";
import { getAuthStorage } from "./LocalStorage/Localstorage";

function App() {
  let navigate = useNavigate();
  let LoggedIn = getAuthStorage().token;

  useEffect(() => {
    if (LoggedIn.length > 0) {
      return navigate("/game");
    }
  }, [LoggedIn]);

  return (
    <div className={"Main"}>
      <div className={"Header"}>
        <Navbar />
      </div>
      <div className={"Content"}>
        <Routes>
          <Route exact path={"/"} element={<Registration />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/game"} element={<Game />} />
          <Route exact path={"/profile"} element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
