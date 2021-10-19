import React from "react";

export default function Menu(props) {
    return (
        <div className={"menu"}>
            <button
                type={"button"}
                onClick={() => {
                    props.addTime();
                }}
                className={`btn btn--big ${
                    props.isCounting ? "btn--disabled" : ""
                }`}>
                {"+"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    props.removeTime();
                }}
                className={`btn btn--big ${
                    props.isCounting ? "btn--disabled" : ""
                }`}>
                {"-"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    props.startStop();
                }}
                className={"btn btn--normal"}>
                {!props.isCounting ? "Start" : "Stop"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    console.log("clicked Reset");
                }}
                className={"btn btn--normal"}>
                {"Reset"}
            </button>
        </div>
    );
}
