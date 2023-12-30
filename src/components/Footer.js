import React from "react";
import BaseComponent from "./BaseComponent";
import { baseStyles } from "./BaseComponent";

const styles = {
    style: {
        ...baseStyles.baseContainer,
        ...baseStyles.baseMargin,
    },
};

const Footer = () => {
    return (
        <BaseComponent style={styles.style}>
            <footer>
                <p>© 2020 WebShop</p>
            </footer>
        </BaseComponent>
    );
};

export default Footer;
