import React from "react";
import PomodoroTimer from "./components/pomodoro-timer";
export default function App() {
    return (
        <div className={"App"}>
            <h1>{"Pomodoro"}</h1>
            <PomodoroTimer />
        </div>
    );
}
