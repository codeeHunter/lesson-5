import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {
    const selector = useSelector(state => state.Game)

    return (
        <>
            {selector?.questions &&
                <div className={"Game"}>
                    <div className="">
                        <div className="Score">
                            <span>Score: <span className={"Black"}>{selector.points}</span></span>
                        </div>
                        <div className="Timer">
                            <div>Timer: <span className="Black">0</span></div>
                        </div>
                        <span>End game</span>
                    </div>
                    <div className={"Result"}>
                        <span>Question</span><span>Anwser</span><span>Correct</span>
                        {selector.questions.map((i) => {
                            return <div key={i.id} className={"Field"}>
                                <span className={"Question-child"}>{i.question}</span>
                                <span className={"Answer-child"}>{i.answer}</span>
                                <span className={"Current_answer"}>{i.current_answer}</span>
                            </div>
                        })}
                    </div>
                </div>

            }
        </>
    );
};

export default Profile;