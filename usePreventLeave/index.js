import React from "react";
import ReactDOM from "react-dom";
import { usePreventLeave } from "./usePreventLeave";

const App = () => {
    const { protect, unprotect } = usePreventLeave();

    return (
        <div className="App">
            <button onClick={ protect }>Protect</button>
            <button onClick={ unprotect }>Unprotect</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);