import React from "react";
import { useParams } from "react-router-dom";

function Home() {
    const params = useParams();
    console.log(params)

    return(
        <div
            className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}    
        >
            <h1 className="ui header">Welcome to the Homepage!</h1>
            <h3> Clicking the Navbar buttons 
                will show you the features 
                in this project.
            </h3>
            <p>1. The About page shows modals using React Portals</p>
            <p>2. The Contact page shows how to access URL parameters using React Hooks</p>
        </div>
    )
}

export default Home;