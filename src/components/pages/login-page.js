import React from "react";

const LoginPage = ({isLoggedIn, onLogin}) => {
    return (
        <div>
            <p>Login to see secret page</p>
            <button
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    )
}

export default LoginPage;