import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Game from "./Components/Game/Game";
import Profile from "./Components/Profile/Profile";

function App() {
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
