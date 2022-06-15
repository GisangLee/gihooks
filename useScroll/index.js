import React from "react";
import ReactDOM from "react-dom";
import { useScroll } from "./useScroll";

const App = () => {

    const { y } = useScroll();
    
    return (
        <div className="App">
            <h1 style={ { color: y > 100 ? "red" : "blue" } }>hi</h1>
        </div>
    )

};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);