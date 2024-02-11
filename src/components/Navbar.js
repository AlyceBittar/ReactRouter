import React from "react";
import { Link, useLocation, useNavigate, useParams} from "react-router-dom";

// V6 implementation for React Router happens via Hooks
function ComponentWithRouterProp(Component) {
    return function WrappedComponent(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
              {...props}
              router={{ location, navigate, params }}
            />
          );
    };
}

function Navbar(){
    return(
        <nav className="ui raised very padded segment">
            <a href="/" className="ui teal inverted segment">Gloria</a>
            <div className="ui right floated header">
                <button className="ui button"><Link to="/">Home</Link></button>
                <button className="ui button"><Link to="/about">About</Link></button>
                <button className="ui button"><Link to="/contact">Contact</Link></button>
            </div>
        </nav>
    )
}

export default ComponentWithRouterProp(Navbar);