import React from "react";

import ChildrenComponent from "./ChildrenComponent";

const ParentComponent = (props) => {

    const inputInfo = (name, age, nerd) => {
        console.log(name, age, nerd)
    }

    return (
        <ChildrenComponent whenClick={inputInfo} />
    )

}

export default ParentComponent