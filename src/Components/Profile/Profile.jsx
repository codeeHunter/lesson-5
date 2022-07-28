import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const game = useSelector(state => state.Game)
    const isAuth = useSelector(state => state.Login.isAuth);
    const user = useSelector(state => state.Registration.name);
    let navigate = useNavigate();

    useEffect(() => {
        game.isEnd = false;
    }, [game, game.isEnd])

    useEffect(() => {
        if (!isAuth) {
            navigate("/login")
        }
    }, [isAuth, navigate])

    return (
        <>
            {game?.questions?.length > 0 ?
                <div className={"Game"}>
                    <div className="InfoScore">
                        <h1>User: {user}</h1>
                        <h2>Result's</h2>
                        <div className="Score">
                            <span>Score: <span className={"Black"}>{game.points}</span></span>
                        </div>
                        <div className="Timer">
                            <div>Timer: <span className="Black">0</span></div>
                        </div>
                        <span className={"End"}>End game</span>
                    </div>
                    <div className={"Result"}>
                        <div>
                            <table className={"Table"}>
                                <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Answer</th>
                                    <th>Correct</th>
                                </tr>
                                </thead>
                                <tbody>
                                {game.questions.map((i) => {
                                    return <tr key={i.id} className={"Field"}>
                                        <td>{i.question}</td>
                                        <td>{i.answer}</td>
                                        <td>{i.current_answer === 1 ? "Нет ответа" : i.current_answer}</td>
                                    </tr>
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                :
                <div className={"Game"}>
                    <div className="Info">
                        <h1>User: {user}</h1>
                        <h2>Вы еще не играли</h2>
                    </div>
                </div>
            }
        </>
    );
};

export default Profile;