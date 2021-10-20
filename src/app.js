import React, {useState} from "react";
import useInterval from "use-interval";
import PomodoroTimer from "./components/pomodoro-timer";
import Menu from "./components/menu";
import Modal from "./components/modal";

export default function App() {
    const DEFAULT_TIME = 1500;
    const MAX_TIME = 3600;

    /**
     * According to Francesco Cirillo, work should be divided to shunks of 25 minutes
     * separated with pauses. Therefore the default value will be 25 * 60 so 1500 seconds
     */
    const [countDown, setCountDown] = useState(DEFAULT_TIME); // Time remaining
    const [isCounting, setIsCounting] = useState(false); // Bool to control timer and buttons
    const [myInterval, setMyInterval] = useState(null); // Enable / disable timer
    const [showModal, setShowModal] = useState(false);

    /**
     * Add 5 minutes to the timer to a maximum of 60 minutes
     */
    const addTime = () => {
        if (isCounting || countDown >= MAX_TIME) {
            return;
        }
        let newTimer = countDown + 300;
        if (newTimer > MAX_TIME) {
            newTimer = MAX_TIME;
        }
        setCountDown(newTimer);
    };

    /**
     * Remove 5 minutes to the timer to a minimum of 0 minutes
     */
    const removeTime = () => {
        if (isCounting || countDown <= 0) {
            return;
        }
        let newTimer = countDown - 300;
        if (newTimer < 0) {
            newTimer = 0;
        }
        setCountDown(newTimer);
    };

    /**
     * Called by the timer and decrease the countdown.
     */
    const decreaseCountDown = () => {
        const newTimer = countDown - 1;
        setCountDown(newTimer);
    };

    /**
     * Enable timer by setting a time interval.
     * We want timer to trigger every seconds.
     */
    const startTimer = () => {
        setMyInterval(1000);
    };

    /**
     * Disable timer by setting time interval to null.
     */
    const stopTimer = () => {
        setMyInterval(null);
    };

    /**
     * Calling this function reverse the 'isCounting' state on and off.
     * This state is used to enable or disable timer (function calls) and enable or disable buttons.
     */
    const startStop = () => {
        const a = new Promise(resolve => {
            const counting = !isCounting;
            setIsCounting(counting);
            resolve(counting);
        });
        a.then(counting => {
            if (counting) {
                startTimer();
            } else {
                stopTimer();
            }
        });
    };

    /**
     * Calling this function when isCounting = false set timer to default value.
     */
    const resetCountDown = () => {
        if (isCounting) {
            return;
        }
        setCountDown(DEFAULT_TIME);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    /**
     * Timer
     */
    useInterval(() => {
        if (countDown <= 0) {
            stopTimer();
            setShowModal(true);
            return;
        }
        if (!isCounting) {
            return;
        }
        decreaseCountDown();
    }, myInterval);

    return (
        <div className={"App"}>
            <Modal showModal={showModal} closeModal={closeModal} />
            <div className={"flex"}>
                <h1>{"Pomodoro"}</h1>
                <PomodoroTimer countDown={countDown} />
                <Menu
                    addTime={addTime}
                    removeTime={removeTime}
                    isCounting={isCounting}
                    startStop={startStop}
                    resetCountDown={resetCountDown}
                />
            </div>
        </div>
    );
}
