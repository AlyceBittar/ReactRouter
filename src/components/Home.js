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
            <h3 className="ui header">Home</h3>
            <p>Lorem ipsum etc.</p>
        </div>
    )
}

export default Home;