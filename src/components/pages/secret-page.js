import React from "react";
import {Navigate} from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
    if (isLoggedIn){
        return(
            <div>
                <h3>Secret Content!</h3>
            </div>
        )
    }

    return <Navigate to='/login'/>

}

export default SecretPage;