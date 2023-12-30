import React from "react";
import { baseStyles } from "./BaseComponent";

const Button = ({ text, onClick, style }) => {
    const [hover, setHover] = React.useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    const buttonStyle = hover
        ? {
              ...baseStyles.baseContainerInverted,
              ...baseStyles.basePadding,
          }
        : {
              ...baseStyles.baseContainer,
              ...baseStyles.basePadding,
          };

    return (
        <button
            style={{ ...buttonStyle, ...style }}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
