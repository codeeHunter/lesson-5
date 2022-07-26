import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Profile from "./Components/Profile/Profile";
import Game from "./Game/Game";

function App() {
    return (
        <BrowserRouter>
            <div className={"Main"}>
                <div className={"Header"}>
                    <Navbar/>
                </div>
                <div className={"Content"}>
                    <Routes>
                        <Route path={"/"} element={<Registration />}/>
                        <Route path={"/login"} element={<Login />}/>
                        <Route path={"/profile"} element={<Profile />}/>
                        <Route path={"/game"} element={<Game />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
