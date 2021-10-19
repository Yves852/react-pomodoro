import React from "react";
import PomodoroTimer from "./components/pomodoro-timer";
import Menu from "./components/menu";

export default function App() {
    return (
        <div className={"App"}>
            <div className={"flex"}>
                <h1>{"Pomodoro"}</h1>
                <PomodoroTimer />
                <Menu />
            </div>
        </div>
    );
}
