import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Game from "./Components/Game/Game";
import Profile from "./Components/Profile/Profile";

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
                        <Route path={"/game"} element={<Game />}/>
                        <Route path={"/profile"} element={<Profile />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
