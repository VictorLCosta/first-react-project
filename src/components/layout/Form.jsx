import React, { useState } from "react";

const Form = (props) => {

    const [value, setValue] = useState('Inicial')

    function onChange(e) {
        setValue(e.target.value)
    }

    return (
        <form action="">
            <input type="text" value={value} onChange={onChange} />
            <input type="text" value={value} onChange={onChange} />
        </form>
    )

}

export default Form