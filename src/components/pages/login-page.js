import React from "react";
import {Link} from "react-router-dom";

const LoginPage = ({isLoggedIn, onLogin}) => {
    return (
        <div>
            <p>Login to see secret page</p>
            <button
                onClick={onLogin}
            >
                <Link to="/secret">Login</Link>
            </button>
        </div>
    )
}

export default LoginPage;