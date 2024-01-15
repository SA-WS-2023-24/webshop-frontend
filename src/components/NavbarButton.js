import React from "react";
import Button from "./Button";

const NavbarButton = ({ text, link, style }) => {
    const handleClick = () => {
        window.location.href = link;
    };

    return <Button onClick={handleClick} text={text} style={style} />;
};

export default NavbarButton;
