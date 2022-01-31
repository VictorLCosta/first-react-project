import React, { cloneElement } from "react";
import './BoxContainer.css'

const BoxContainer = (props) => {
    return (
        <div className="box-container">
            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i })
            })}
        </div>
    )
}

export default BoxContainer