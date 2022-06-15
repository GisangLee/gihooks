import React from "react";
import ReactDOM from "react-dom";
import { useBeforeLeave } from "./useBeforeLeave";

const App = () => {
    const begForLife = () => console.log("please do not leave");

    useBeforeLeave(begForLife);

    return (
        <div className="App">
            <button onClick={ protect }>Protect</button>
            <button onClick={ unprotect }>Unprotect</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);