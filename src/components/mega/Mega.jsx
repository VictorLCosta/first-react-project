import React, { useState } from "react";
import './Mega.css'
import generate from "./megaData";

const Mega = (props) => {

    const [qtd, setQtd] = useState(7)
    const [nums, setNums] = useState()

    function changeQtd (e) {
        setQtd(e.target.value)
    }

    function generateResult() {
        var numbers = generate(qtd)

        setNums(numbers)
    }

    return (
        <>
            <input type="number" value={qtd} onChange={changeQtd} />
            <button onClick={generateResult}>Gerar resultado</button>
            <div className="mega-numbers">
                {nums.join(' ')}
            </div>
        </>
    )

}

export default Mega