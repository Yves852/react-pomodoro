import React, {useState} from "react";
import PomodoroTimer from "./components/pomodoro-timer";
import Menu from "./components/menu";

export default function App() {
    const DEFAULT_TIME = 1500;
    const MAX_TIME = 3600;

    /**
     * According to Francesco Cirillo, work should be divided to shunks of 25 minutes
     * separated with pauses. Therefore the default value will be 25 * 60 so 1500 seconds
     */
    const [myTimer, setTimer] = useState(DEFAULT_TIME);
    const [isCounting, setIsCounting] = useState(false);

    /**
     * Add 5 minutes to the timer to a maximum of 60 minutes
     */
    const addTime = () => {
        if (isCounting || myTimer >= MAX_TIME) {
            return;
        }
        let newTimer = myTimer + 300;
        if (newTimer > MAX_TIME) {
            newTimer = MAX_TIME;
        }
        setTimer(newTimer);
    };

    /**
     * Remove 5 minutes to the timer to a minimum of 0 minutes
     */
    const removeTime = () => {
        if (isCounting || myTimer <= 0) {
            return;
        }
        let newTimer = myTimer - 300;
        if (newTimer < 0) {
            newTimer = 0;
        }
        setTimer(newTimer);
    };

    /**
     * Calling this function reverse the 'isCounting' state on and off. This state is used to control timer countdown.
     */
    const startStop = () => {
        const newCounting = !isCounting;
        setIsCounting(newCounting);
    };

    /**
     * Calling this function when isCounting = false set timer to default value.
     */
    const resetTimer = () => {
        if (isCounting) {
            return;
        }
        setTimer(DEFAULT_TIME);
    };

    /**
     * Timer countdown.
     *
     * Decrease every seconds if counter enabled (isCouting) and if timer is not at 0 or below.
     */
    setTimeout(() => {
        if (!isCounting || myTimer <= 0) {
            return;
        }
        const newTimer = myTimer - 1;
        setTimer(newTimer);
    }, 1000);

    return (
        <div className={"App"}>
            <div className={"flex"}>
                <h1>{"Pomodoro"}</h1>
                <PomodoroTimer myTimer={myTimer} />
                <Menu
                    addTime={addTime}
                    removeTime={removeTime}
                    isCounting={isCounting}
                    startStop={startStop}
                    resetTimer={resetTimer}
                />
            </div>
        </div>
    );
}
