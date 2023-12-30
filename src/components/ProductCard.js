import React from "react";
import BaseComponent from "./BaseComponent";
import { baseStyles } from "./BaseComponent";
import Button from "./Button";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
    style: {
        ...baseStyles.baseContainer,
        ...baseStyles.basePadding,
        boxSizing: "border-box",
        margin: "-1px",
        display: "flex",
        justifyContent: "space-evenly",
        width: "33.45%",
    },
    leftInnerDiv: {
        width: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    rightInnerDiv: {
        width: "15rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    image: {
        width: "10rem",
        height: "10rem",
    },
    button: {
        width: "6rem",
    },
};

const ProductCard = ({ product }) => {
    return (
        <BaseComponent style={styles.style}>
            <div style={styles.leftInnerDiv}>
                <img src={product.image} style={styles.image} />
            </div>
            <div style={styles.rightInnerDiv}>
                <h2>{product.name}</h2>
                <h3>Price: {product.price}$</h3>
                <div style={styles.buttonDiv}>
                    <Button
                        text=<FontAwesomeIcon icon={faBookmark} />
                        style={styles.button}
                        onClick={() => alert("Wishlist")}
                    />
                    <Button
                        text=<FontAwesomeIcon icon={faCartPlus} />
                        style={styles.button}
                        onClick={() => alert("Cart")}
                    />
                </div>
            </div>
        </BaseComponent>
    );
};

export default ProductCard;
