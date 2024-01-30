import { Outlet } from "react-router";
import NavigationBar from "../components/main/NavigationBar";
import SessionContextProvider from "../context/SessionContext";
import Footer from "../components/main/Footer";

/**
 * This page contains only the navigation bar and footer, and allows other
 * content to be placed within it. It is like a frame for the real content.
 */
export default function RootPage() {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column"
        }}>
            <SessionContextProvider>
                <NavigationBar />
                <div style={{
                    display: "flex",
                    flex: 1
                }}>
                    <Outlet />
                </div>
                <Footer />
            </SessionContextProvider>
        </div>
    );
}