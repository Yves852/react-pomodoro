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
                onClick={e => {
                    props.resetCountDown(e);
                }}
                className={`btn btn--normal ${
                    props.isCounting ? "btn--disabled" : ""
                }`}>
                {"Reset"}
            </button>
        </div>
    );
}
