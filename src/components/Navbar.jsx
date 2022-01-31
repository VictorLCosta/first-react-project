import React from "react";
import './navbar.css'

const Navbar = () => {
    return (
        <header className="header">
            <div className="logo">
                Agro
            </div>

            <div className="links">
                <a href="#">Serviços</a>
                <a href="#">Relatos</a>
                <a href="#">Alimentos</a>
                <a href="#">Contato</a>
            </div>

            <div className="icons">

            </div>
        </header>
    )
}

export default Navbar;