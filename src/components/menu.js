import React from "react";

export default function Menu(props) {
    return (
        <div className={"menu"}>
            <button
                type={"button"}
                onClick={() => {
                    props.addTime();
                }}
                className={"button--big"}>
                {"+"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    props.removeTime();
                }}
                className={"button--big"}>
                {"-"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    console.log("clicked Start");
                }}
                className={"button--normal"}>
                {"Start"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    console.log("clicked Reset");
                }}
                className={"button--normal"}>
                {"Reset"}
            </button>
        </div>
    );
}