import React from "react";
import ReactDOM from "react-dom";
import { useFullScreen } from "./useFullScreen";


const App = () => {

    const callback = (isFull) => {
        console.log(isFull ? "we are full" : "we are small");
    };

    const { element, triggerFullScreen, exitFullScreen } = useFullScreen(callback);

    return (
        <div className="App">
            <div ref={ element }>
                <img src="https://bit.ly/3xtPjLR"/>
                <button onClick={ exitFullScreen }>Exit FullScreen</button>
            </div>
            <button onClick={ triggerFullScreen }>Make FullScreen</button>
        </div>
    )

};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);