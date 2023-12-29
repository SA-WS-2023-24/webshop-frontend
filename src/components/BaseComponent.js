import React from "react";
import colors from "../colors";

export const baseStyles = {
    baseContainer: {
        textAlign: "center",
        backgroundColor: colors.background,
        border: "2px solid {colors.primaryAccent}",
        color: colors.primaryAccent,
    },
    basePadding: {
        padding: "1rem",
    },
    baseMargin: {
        margin: "1rem",
    },
};

const BaseComponent = ({ children }) => {
    return (
        <div
            style={{
                ...baseStyles.baseContainer,
                // ...baseStyles.basePadding,
                ...baseStyles.baseMargin,
            }}
        >
            {children}
        </div>
    );
};

export default BaseComponent;
