import React from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "./Modal/Modal";

function Contact() {
    const params = useParams();
    console.log(params)
    return(
        <div>
            <Modal />
            <Link
            to="/Wilma"
            className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}    
            >
                <h3 className="ui header">Wilma</h3>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </Link>
            <Link
            to="/James"
            className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}    
            >
                <h3 className="ui header">James</h3>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </Link>
        </div>
        
    )
}

export default Contact;