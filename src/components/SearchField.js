import React from "react";
import useSearch from "../hooks/useSearch";
import { baseStyles } from "./BaseComponent";

const SearchField = ({ placeholder, onSearch, onClick, style }) => {
    const { query, setQuery } = useSearch("", onSearch);
    const inputStyle = {
        ...baseStyles.baseContainer,
        ...baseStyles.basePadding,
    };

    return (
        <input
            style={{ ...inputStyle, ...style }}
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={onClick}
        />
    );
};

export default SearchField;
