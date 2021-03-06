import React from "react";
import {SwapiServiceConsumer} from "../sw-context";

const WithSwapi = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);

                        return(
                            <Wrapped {...props} {...serviceProps}/>
                        )
                    }
                }
            </SwapiServiceConsumer>
        )};
};

export default WithSwapi;