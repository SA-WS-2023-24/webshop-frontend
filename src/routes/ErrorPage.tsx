import { useRouteError } from "react-router-dom";

/**
 * This error page is displayed whenever an incorrect route is called up.
 * Example: www.our-shop.com/wrong/route
 */
export default function ErrorPage() {

    const error = useRouteError();
    console.error(error);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh'
        }}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}