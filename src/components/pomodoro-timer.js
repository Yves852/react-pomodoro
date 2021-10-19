import React from "react";

export default function PomodoroTimer() {
    return (
        <>
            <div className={"timer"}>
                <div className={"minutes"}>{"10"}</div>
                <div>{" : "}</div>
                <div className={"seconds"}>{"30"}</div>
            </div>
        </>
    );
}
