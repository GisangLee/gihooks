import React from "react";
import ReactDOM from "react-dom";
import { useNotification } from "./useNotification";

const App = () => {
    const triggerNotification = useNotification(
        "김치를 훔치자",
        {
            body: " i Love Kimchi",
        }
    );

    return (
        <div className="App">
            <button onClick={ triggerNotification }>Hello World</button>
        </div>
    )

};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);