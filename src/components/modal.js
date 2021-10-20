import React from "react";

export default function Modal(props) {
    if (!props.showModal) {
        return null;
    }
    return (
        <div>
            <p>{"Modal window"}</p>
            <button
                type={"button"}
                onClick={() => {
                    props.closeModal();
                }}
                className={"btn btn--normal"}>
                {"Close"}
            </button>
            <button type={"button"} className={"btn btn--normal"}>
                {"Again"}
            </button>
        </div>
    );
}
