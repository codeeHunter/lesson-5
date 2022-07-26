import React, {useState} from 'react';
import {Play} from "../../Request/Request";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";


const Profile = () => {
    const [value, setValue] = useState(1);
    const game = useNavigate()
    const dispatch = useDispatch();

    const play = () => {
        Play(value).then(response => {
            if (response.status) {
                let res = response.data;
                dispatch({type: "Game", question: res.question, options: res.options, points: res.points, time: res.time})
                game("/game")
            }
        })
    }

    return (
        <div className={"Profile"}>
            <select className={"Select"} name="" id="">
                <option disabled={"disabled"} value>Выберите сложность</option>
                <option onFocus={() => setValue(1)} value="1">Easy/Легко</option>
                <option onFocus={() => setValue(2)} value="2">Hard/Тяжело</option>
            </select>
            <button onClick={play}>Start</button>
        </div>
    );
};

export default Profile;