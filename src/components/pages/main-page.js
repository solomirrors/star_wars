import React from "react";
import RandomElements from "../random-elements";

const MainPage = () => {
    return(
        <React.Fragment>
            <RandomElements
                create='person'
                randomMin={1}
                randomMax={82}
            />
            <RandomElements
                create='planet'
                randomMin={1}
                randomMax={60}
            />
            <RandomElements
                create='starship'
                randomMin={1}
                randomMax={36}
            />
        </React.Fragment>
    )
}

export default MainPage;