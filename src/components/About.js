import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal/Modal";
import "./Modal/Modal.css";

function About() {
  const params = useParams();
  console.log(params);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
        onClick={toggleModal}
      >
        <h3 className="ui header">About</h3>
        <p>
            Click me to see a modal!
        </p>
      </div>
      {showModal && <Modal onClose={toggleModal} />}
    </div>
  );
}

export default About;
