import React, {useState} from "react";
import PomodoroTimer from "./components/pomodoro-timer";
import Menu from "./components/menu";

export default function App() {
    const [myTimer, setTimer] = useState(0);

    /**
     * Add 10 seconds to the timer
     */
    const addTime = () => {
        const newTimer = myTimer + 10;
        setTimer(newTimer);
    };

    /**
     * Remove 10 seconds to the timer
     */
    const removeTime = () => {
        if (myTimer <= 0) {
            return;
        }
        const newTimer = myTimer - 10;
        setTimer(newTimer);
    };

    return (
        <div className={"App"}>
            <div className={"flex"}>
                <h1>{"Pomodoro"}</h1>
                <PomodoroTimer myTimer={myTimer} />
                <Menu addTime={addTime} removeTime={removeTime} />
            </div>
        </div>
    );
}
