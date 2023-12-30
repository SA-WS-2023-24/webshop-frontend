import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default PageLayout;
