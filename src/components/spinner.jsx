import React, { useEffect } from "react";
import Error from "./errors/404";

const Spinner = () => {
    const [showError, setShowError] = React.useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowError(true);
        }, 2000);
    }, []);

    return !showError ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    ) : (
        <Error />
    );
};

export default Spinner;
