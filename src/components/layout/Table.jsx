import React from "react";
import products from '../data/products'

const Table = () => {

    const data = products.map((product, i) => {
        return (
            <tr key={i}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                { data }
            </tbody>
        </table>
    )
}

export default Table