import React from "react";
import Button from "./Button";

const styles = {
    navItem: {
        margin: "-2px",
    },
};

const NavbarButton = ({ text, link }) => {
    const handleClick = () => {
        window.location.href = link;
    };

    return <Button onClick={handleClick} text={text} style={styles.navItem} />;
};

export default NavbarButton;
