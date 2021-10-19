import React from "react";

export default function PomodoroTimer(props) {
    /**
     * Minutes is total_seconds / 60
     * Seconds is remaining of total_seconds modulo 60
     */
    const minutes = Math.floor(props.myTimer / 60);
    const seconds = Math.floor(props.myTimer % 60);
    console.log(props.myTimer, " = ", minutes, " : ", seconds);

    return (
        <>
            <div className={"timer"}>
                <div className={"minutes"}>{minutes}</div>
                <div>{" : "}</div>
                <div className={"seconds"}>{seconds}</div>
            </div>
        </>
    );
}
