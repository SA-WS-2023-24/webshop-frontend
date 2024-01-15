import React from "react";

const useSearch = (initialQuery = "", onSearch) => {
    const results = React.useState([]);
    const [query, setQuery] = React.useState(initialQuery);

    React.useEffect(() => {
        if (typeof onSearch === "function") {
            onSearch(query);
        }
    }, [query, onSearch]);

    return { query, setQuery, results };
};

export default useSearch;
