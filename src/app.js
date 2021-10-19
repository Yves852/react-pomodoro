import React, {useState} from "react";
import PomodoroTimer from "./components/pomodoro-timer";
import Menu from "./components/menu";

export default function App() {
    /**
     * According to Francesco Cirillo, work should be divided to shunks of 25 minutes
     * separated with pauses. Therefore the default value will be 25 * 60 so 1500 seconds
     */
    const [myTimer, setTimer] = useState(1500);

    /**
     * Add 5 minutes to the timer
     */
    const addTime = () => {
        const newTimer = myTimer + 300;
        setTimer(newTimer);
    };

    /**
     * Remove 5 minutes to the timer
     */
    const removeTime = () => {
        if (myTimer <= 0) {
            return;
        }
        const newTimer = myTimer - 300;
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
