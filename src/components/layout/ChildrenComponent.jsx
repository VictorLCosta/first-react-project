import React from "react";

const ChildrenComponent = (props) => {
    return (
        <a href="#" onClick={ function(e) { props.whenClick('João', 53, true) } }>AnyTime</a>
    )
}

export default ChildrenComponent