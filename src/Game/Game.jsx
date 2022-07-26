import React from 'react';
import {useSelector} from "react-redux";

const Game = () => {
    const selector = useSelector(state => state.Game);

    console.log(selector)

    return (
        <div className={"Game"}>
            <div className="Score">
                <span>Score: <span className={"Black"}>{selector.points}</span></span>
            </div>
            <div className="Timer">
                <span>Timer: <span className="Black">{selector.time}</span></span>
            </div>
            <div className="Question">
                <span>{selector.question} = ?</span>
            </div>
            <div className="Variants">
                <button className={"Option"}>{selector.options[0]}</button>
                <button className={"Option"}>{selector.options[1]}</button>
                <button className={"Option"}>{selector.options[2]}</button>
                <button className={"Option"}>{selector.options[3]}</button>
            </div>
            <button className={"back Option"}>Go back</button>
        </div>
    );
};

export default Game;