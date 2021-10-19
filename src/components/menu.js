import React from "react";

export default function Menu() {
    return (
        <div className={"menu"}>
            <button
                type={"button"}
                onClick={() => {
                    console.log("clicked +");
                }}
                className={"button--big"}>
                {"+"}
            </button>
            <button
                type={"button"}
                onClick={() => {
                    console.log("clicked -");
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
