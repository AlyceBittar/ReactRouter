import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

function Modal() {
    const params = useParams();
    console.log(params)

    return ReactDOM.createPortal(
        <div className="ui dimmer show modals visible active">
            <div className="ui raised very padded text container segment">
                <h1>I am a modal</h1>
            </div>
        </div>, 
        document.querySelector('#modal')
    )
}

export default Modal;