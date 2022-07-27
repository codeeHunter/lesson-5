import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Answer, Play} from "../../Request/Request";
import {Navigate} from "react-router-dom";
import {useInterval} from "../../Hooks/useInterval";

const Game = () => {
    const selector = useSelector(state => state.Game);
    const dispatch = useDispatch();
    let [count, setCount] = useState(8);
    const [isStart, setIsStart] = useState(false)
    const [value, setValue] = useState(1)

    const play = () => {
        Play(value).then(response => {
            if (response?.status) {
                console.log(response)
                let res = response.data;
                dispatch({
                    type: "Game",
                    question: res.question,
                    options: res.options,
                    points: res.points,
                    time: res.time
                })
                setIsStart(true)
            } else {
                alert("Возникла какая-то ошибка...")
            }
        })
    }

    useInterval(() => {
        setCount(count - 1);
    }, 1000);

    useEffect(() => {
        setCount(selector.time)
    }, [selector])

    const handleClick = (e) => {
        Answer(e.target.value, value).then(response => {
            let res = response.data;
            dispatch({
                type: "Game",
                question: res.question,
                options: res.options,
                points: res.points,
                time: res.time,
                questions: res?.questions,
            })
            setCount(selector.time);
        })
    }

    return (
        <div className={"Game"}>
            {
                !isStart ?
                    <div className={"Start"}>
                        <select name="" id="" className={"Select"} onChange={e => setValue(e.target.value)}>
                            <option disabled value="">Выберите сложность</option>
                            <option value="1">Easy/Легко</option>
                            <option value="2">Hard/Тяжело</option>
                        </select>
                        <button onClick={play}>Start</button>
                    </div> :
                    <div className={"Game"}>
                        <div className="Score">
                            <span>Score: <span className={"Black"}>{selector.points}</span></span>
                        </div>
                        <div className="Timer">
                            <div>Timer: <span className="Black">{count > 0 ? count : 0}</span></div>
                        </div>
                        <div className="Question">
                            <span>{selector.question} = ?</span>
                        </div>
                        <div className="Variants">
                            {selector?.options && selector?.options.map((items, index) => {
                                return <button value={items} key={index} className={"Option"}
                                               onClick={e => handleClick(e)}>{items}</button>
                            })}
                        </div>
                        <button className={"back Option"} onClick={() => <Navigate to={"/profile"}/>}>Go back</button>
                    </div>
            }
        </div>
    );
};

export default Game;