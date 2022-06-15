import React from "react";
import ReactDOM from "react-dom";
import { useClick } from "./useClick";

const App = () => {
    const onClick = () => console.log("clicked");
    const title = useClick(onClick);

    return (
        <div className="App">
        <h1 ref={ title }>Hi</h1>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);