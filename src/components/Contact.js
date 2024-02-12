import React from "react";
import { Link, useParams } from "react-router-dom";

function Contact() {
    const params = useParams();
    console.log(params)
    return(
        <div>
            <Link
            to="/Wilma"
            className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}    
            >
                <h3 className="ui header">Wilma</h3>
                <p>Click me to see how URL params are being pulled for Wilma.
                </p>
            </Link>
            <Link
            to="/James"
            className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}    
            >
                <h3 className="ui header">James</h3>
                <p>Click me to see how URL params are being pulled for James.
                </p>
            </Link>
        </div>
        
    )
}

export default Contact;