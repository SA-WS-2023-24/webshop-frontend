import React from "react";
import colors from "../colors";

export const baseStyles = {
    baseContainer: {
        textAlign: "center",
        backgroundColor: colors.background,
        border: `2px solid ${colors.primaryAccent}`,
        color: colors.primaryAccent,
    },
    baseContainerInverted: {
        textAlign: "center",
        backgroundColor: colors.primaryAccent,
        border: `2px solid ${colors.primaryAccent}`,
        color: colors.background,
    },
    basePadding: {
        padding: "1rem",
    },
    baseMargin: {
        margin: "1rem",
    },
};

const BaseComponent = ({ children, style }) => {
    return <div style={style}>{children}</div>;
};

export default BaseComponent;
