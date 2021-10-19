import React, {useState} from "react";
import PomodoroTimer from "./components/pomodoro-timer";
import Menu from "./components/menu";

export default function App() {
    const defaultTime = 1500;

    /**
     * According to Francesco Cirillo, work should be divided to shunks of 25 minutes
     * separated with pauses. Therefore the default value will be 25 * 60 so 1500 seconds
     */
    const [myTimer, setTimer] = useState(defaultTime);
    const [isCounting, setIsCounting] = useState(false);

    /**
     * Add 5 minutes to the timer
     */
    const addTime = () => {
        if (isCounting) {
            return;
        }
        const newTimer = myTimer + 300;
        setTimer(newTimer);
    };

    /**
     * Remove 5 minutes to the timer
     */
    const removeTime = () => {
        if (isCounting || myTimer <= 0) {
            return;
        }
        const newTimer = myTimer - 300;
        setTimer(newTimer);
    };

    /**
     * Calling this function reverse the 'isCounting' state on and off. This state is used to control timer progression.
     * Wrap reversion in a promise to make instructions synchronous.
     */
    const startStop = () => {
        const a = new Promise(resolve => {
            const newCounting = !isCounting;
            setIsCounting(newCounting);
            resolve(newCounting);
        });
        a.then(newCounting => {
            console.log("isCounting", newCounting);
            if (newCounting) {
                console.log("Timer started");
            } else {
                console.log("Timer stopped");
            }
        });
    };

    /**
     * Calling this function when isCounting = false set timer to default value.
     */
    const resetTimer = () => {
        if (isCounting) {
            return;
        }
        setTimer(defaultTime);
    };

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
