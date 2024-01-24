import { Outlet } from "react-router";
import NavigationBar from "../components/main/NavigationBar";

/**
 * This page contains only the navigation bar and footer, and allows other
 * content to be placed within it. It is like a frame for the real content.
 */
export default function RootPage() {
    return (
        <div>
            <NavigationBar />
            <Outlet />
        </div>
    );
}