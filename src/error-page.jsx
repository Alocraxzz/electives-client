import { useRouteError } from "react-router-dom";
import App from "./App";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <App>
            <div>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </App>
    );
}