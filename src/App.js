import React from "react";
import PageLayout from "./pages/PageLayout";
import BaseComponent from "./components/BaseComponent";
import Button from "./components/Button";

function App() {
    return (
        <PageLayout>
            <BaseComponent>
                <h1>My Website</h1>
                <p>This is my website.</p>
                <Button text="Click me!" />
            </BaseComponent>
        </PageLayout>
    );
}

export default App;
