import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Card() {
    const [user, setUser] = useState('');
    // Call hook to see params in V6
    const params = useParams();
    
    // componentDidMount
    useEffect(() => {
        setUser(params.user)
        console.log(params.user)
    }, [params.user]);

    return(
        <div
        className="ui raised very padded text container segment"
        style={{marginTop:'80px'}}    
        >
        <h3 className="ui header">{ user }</h3>
        </div>
    )
}

export default Card;