import React from "react";
import { baseStyles } from "./BaseComponent";

const styles = {
    navItem: {
        margin: "-2px",
    },
};

const NavbarButton = ({ text, link }) => {
    return (
        <button
            style={{
                ...baseStyles.baseContainer,
                ...baseStyles.basePadding,
                ...styles.navItem,
            }}
            onClick={() => (window.location.href = link)}
        >
            {text}
        </button>
    );
};

export default NavbarButton;
