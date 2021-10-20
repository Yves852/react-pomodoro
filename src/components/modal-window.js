import React from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

export default function ModalWindow(props) {
    /* let subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#f00";
    } */
    return (
        <>
            <Modal
                isOpen={props.showModal}
                /* onAfterOpen={() => afterOpenModal()} */
                onRequestClose={() => props.closeModal()}
                style={customStyles}
                contentLabel={"Example Modal"}>
                <h2>
                    {/* ref={_subtitle => (subtitle = _subtitle)}>*/}
                    {"Hello"}
                </h2>
                <button
                    type={"button"}
                    onClick={() => {
                        props.closeModal();
                    }}>
                    {"close"}
                </button>
                <div>{"I am a modal"}</div>
            </Modal>
        </>
    );
}
