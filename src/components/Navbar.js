import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavbarButton from "./NavbarButton";
import BaseComponent from "./BaseComponent";
import { baseStyles } from "./BaseComponent";
import SearchField from "./SearchField";

const styles = {
    navContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    style: {
        ...baseStyles.baseContainer,
        ...baseStyles.baseMargin,
    },
    navItem: {
        margin: "-2px",
        fontSize: "16px",
        paddingLeft: "2rem",
        paddingRight: "2rem",
    },
};

const Navbar = ({ setSearching }) => {
    return (
        <BaseComponent style={styles.style}>
            <header>
                <nav style={styles.navContainer}>
                    <NavbarButton
                        text="WebShop"
                        link="/"
                        style={styles.navItem}
                    />
                    <div>
                        <NavbarButton
                            text="Products"
                            link="/products"
                            style={styles.navItem}
                        />
                        <NavbarButton
                            text="Prebuilts"
                            link="/prebuilts"
                            style={styles.navItem}
                        />
                        <NavbarButton
                            text="Configurator"
                            link="/configurator"
                            style={styles.navItem}
                        />
                        <SearchField
                            placeholder="Search..."
                            // onSearch={alert("Search")}
                            style={styles.navItem}
                            onClick={() => setSearching(true)}
                        />
                        <NavbarButton
                            text=<FontAwesomeIcon icon={faShoppingCart} />
                            link="/cart"
                            style={styles.navItem}
                        />
                        <NavbarButton
                            text=<FontAwesomeIcon icon={faBookmark} />
                            link="/wishlist"
                            style={styles.navItem}
                        />
                        <NavbarButton
                            text=<FontAwesomeIcon icon={faUser} />
                            link="/profile"
                            style={styles.navItem}
                        />
                    </div>
                </nav>
            </header>
        </BaseComponent>
    );
};

export default Navbar;
