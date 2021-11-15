import React from "react";

const WithChild = (Func) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {Func}
            </Wrapped>
        )
    };
};

export default WithChild;