import React from "react";
import NavBar from "./navBar";

const Header = ({ handleSearch }) => {
    return (
        <header className="container">
            <NavBar handleSearch={handleSearch} />
        </header>
    );
};

export default Header;
