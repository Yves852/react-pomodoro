import React, {useState, useEffect} from "react";
import useInterval from "use-interval";
import Swal from "sweetalert2";
import PomodoroTimer from "./components/pomodoro-timer";
import Menu from "./components/menu";

export default function App() {
    //#region Variables and states
    const DEFAULT_TIME = 5;
    const MAX_TIME = 3600;

    /**
     * According to Francesco Cirillo, work should be divided to shunks of 25 minutes
     * separated with pauses. Therefore the default value will be 25 * 60 so 1500 seconds
     */
    const [countDown, setCountDown] = useState(DEFAULT_TIME); // Time remaining
    const [isCounting, setIsCounting] = useState(false); // Bool to control timer and buttons
    const [myInterval, setMyInterval] = useState(null); // Enable / disable timer
    const [showModal, setShowModal] = useState(false); // Bool to display the modal window
    //#endregion

    //#region Timer functions
    /**
     * Add 5 minutes to the timer to a maximum of 60 minutes
     */
    const addTime = () => {
        if (isCounting || countDown >= MAX_TIME) {
            return;
        }
        let newTimer = countDown + 1;
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
        let newTimer = countDown - 1;
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
     * Reset timer to default value when counter stopped
     */
    const resetCountDown = () => {
        if (isCounting) {
            return;
        }
        setCountDown(DEFAULT_TIME);
    };
    //#endregion

    //#region Modal
    /**
     * Modal opening and closing
     */
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (showModal) {
            Swal.fire({
                title: "Time up!",
                text: "Good work. Take a pause.",
                icon: "success",
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: true,
            }).then(() => {
                closeModal();
            });
        }
    });
    //#endregion

    //#region Timer
    useInterval(() => {
        if (countDown <= 0) {
            startStop();
            openModal();
            return;
        }
        decreaseCountDown();
    }, myInterval);
    //#endregion

    //#region Render
    return (
        <div className={"App"}>
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
    //#endregion
}
