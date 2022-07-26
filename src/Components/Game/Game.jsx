import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Answer, Play } from "../../Request/Request";
import { useInterval } from "../../Hooks/useInterval";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const game = useSelector((state) => state.Game);
  const isAuth = useSelector((state) => state.Login.access_token);

  const dispatch = useDispatch();
  let [count, setCount] = useState(game.time);
  const [isStart, setIsStart] = useState(false);
  const [value, setValue] = useState("1");
  const [answer, setAnswer] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      alert("Вы не авторизованы!");
      navigate("/login");
    }
  }, [isAuth]);

  const play = () => {
    Play(value).then((response) => {
      if (response?.status) {
        let res = response?.data;
        dispatch({
          type: "Game",
          question: res?.question,
          options: res?.options,
          points: res?.points,
          time: res?.time,
          isEnd: false,
        });
        setIsStart(true);
        setCount(res.time);
      } else {
        alert("Возникла какая-то ошибка...");
      }
    });
  };

  useInterval(() => {
    setCount(count - 1);
  }, 1000);

  const handleClick = (e) => {
    Answer(e.target.value, value).then((response) => {
      let res = response?.data;
      dispatch({
        type: "Game",
        question: res?.question,
        options: res?.options,
        points: res?.points,
        time: res?.time,
        questions: res?.questions,
        isEnd: res?.questions?.length > 0 ? true : false,
      });
      setCount(game.time);
    });
  };

  const handleChange = (event) => {
    setAnswer(event.target.value.toString());
  };

  useEffect(() => {
    if (count === 0 && isStart) {
      if (value === "1") {
        Answer(1, "1").then((response) => {
          let res = response?.data;
          dispatch({
            type: "Game",
            question: res?.question,
            options: res?.options,
            points: res?.points,
            time: res?.time,
            questions: res?.questions,
            isEnd: res?.questions?.length > 0 ? true : false,
          });
          setCount(res.time);
        });
      } else {
        Answer("1", "2").then((response) => {
          let res = response?.data;
          dispatch({
            type: "Game",
            question: res?.question,
            options: res?.options,
            points: res?.points,
            time: res?.time,
            questions: res?.questions,
            isEnd: res?.questions?.length > 0 ? true : false,
          });
          setAnswer("");
          setCount(res.time);
        });
      }
    }
  }, [isStart, value, count, dispatch]);

  const sendAnswer = () => {
    if (answer.length === 0) {
      Answer("1", value).then((response) => {
        let res = response?.data;
        dispatch({
          type: "Game",
          question: res?.question,
          options: res?.options,
          points: res?.points,
          time: res?.time,
          questions: res?.questions,
          isEnd: res?.questions?.length > 0 ? true : false,
        });
        setCount(game.time);
        setAnswer("");
      });
    } else {
      Answer(answer, value).then((response) => {
        let res = response?.data;
        if (res !== undefined) {
          dispatch({
            type: "Game",
            question: res?.question,
            options: res?.options,
            points: res?.points,
            time: res?.time,
            questions: res?.questions,
            isEnd: res?.questions?.length > 0 ? true : false,
          });
        }
        setCount(game.time);
        setAnswer("");
      });
    }
  };

  useEffect(() => {
    if (game.isEnd) {
      return navigate("/profile");
    }
  }, [game.isEnd, navigate]);

  return (
    <div className={"Game"}>
      {!isStart ? (
        <div className={"Start"}>
          <select
            name=""
            id=""
            className={"Select"}
            onChange={(e) => setValue(e.target.value)}
          >
            <option disabled value="0">
              Выберите сложность
            </option>
            <option value="1">Easy/Легко</option>
            <option value="2">Hard/Тяжело</option>
          </select>
          <button onClick={play}>Start</button>
        </div>
      ) : (
        <div className={"Game"}>
          <div className="Score">
            <span>
              Score: <span className={"Black"}>{game.points}</span>
            </span>
          </div>
          <div className="Timer">
            <div>
              Timer: <span className="Black">{count > 0 ? count : 0}</span>
            </div>
          </div>
          <div className="Question">
            <span>{game.question} = ?</span>
          </div>
          <div className="Variants">
            {game?.options?.length > 0 ? (
              game?.options.map((items, index) => {
                return (
                  <button
                    value={items}
                    key={index}
                    className={"Option"}
                    onClick={(e) => handleClick(e)}
                  >
                    {items}
                  </button>
                );
              })
            ) : (
              <div className={"SetAnswer"}>
                <input
                  type="number"
                  onChange={handleChange}
                  placeholder={"Введите число"}
                  value={answer}
                />
                <button className={"Option"} onClick={sendAnswer}>
                  Отправить ответ
                </button>
              </div>
            )}
          </div>
          <button
            className={"back Option"}
            onClick={() => {
              setIsStart(false);
              setValue("1");
            }}
          >
            Go back
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
