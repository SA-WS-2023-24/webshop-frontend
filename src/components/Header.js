import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavbarButton from "./NavbarButton";

const styles = {
    navContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
};

const Header = () => {
    return (
        <header>
            <nav style={styles.navContainer}>
                <NavbarButton text="WebShop" link="/" />
                <div>
                    <NavbarButton text="Products" link="/products" />
                    <NavbarButton text="Prebuilts" link="/prebuilts" />
                    <NavbarButton text="Search..." link="/search" />
                    <NavbarButton
                        text=<FontAwesomeIcon icon={faShoppingCart} />
                        link="/cart"
                    />
                    <NavbarButton
                        text=<FontAwesomeIcon icon={faBookmark} />
                        link="/wishlist"
                    />
                    <NavbarButton
                        text=<FontAwesomeIcon icon={faUser} />
                        link="/profile"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
