import React from "react";
import './nav.css'

function Nav() {
    return (
        <>
            <nav className="App-nav  w-full" id="home">
                <ul className="flex justify-between w-6/12 p-3" id="list">
                    <li><a href="#sobre" className="font-mono">SOBRE</a></li>
                    <li><a href="#curriculo" className="font-mono">CURRÍCULO</a></li>
                    <li><a href="#projetos" className="font-mono">PROJETOS</a></li>
                </ul>
            </nav>
        </>
    );
}
export default Nav;