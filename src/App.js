import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BaseComponent from "./components/BaseComponent";

function App() {
    return (
        <div className="container">
            <BaseComponent>
                <Header />
            </BaseComponent>
            <BaseComponent>
                <Footer />
            </BaseComponent>
        </div>
    );
}

export default App;
