import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import useSearch from "../hooks/useSearch";

const PageLayout = ({ children }) => {
    const setQuery = useSearch();
    const isSearching = React.useState(false);

    return (
        <div>
            {isSearching ? <Searchbar onSearch={setQuery} /> : <Navbar />}
            {children}
            <Footer />
        </div>
    );
};

export default PageLayout;
