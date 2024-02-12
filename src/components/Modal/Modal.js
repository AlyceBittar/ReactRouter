import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

function Modal({ onClose }) {
  const params = useParams();
  console.log(params);

  const handleClose = () => {
    onClose(); // Call the onClose function passed from the parent component
  };

  return ReactDOM.createPortal(
    <div className="ui dimmer show modals visible active" onClick={handleClose}>
      <div
        className="ui raised very padded text container segment"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>I am a modal</h1>
        <p>You can close me by clicking on the background.</p>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;
