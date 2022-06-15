import React from "react";
import ReactDOM from "react-dom";
import { useFadeIn } from "./useFadeIn";

const App = () => {
    
    const fadeInH1 = useFadeIn({
        duration: 3,
        delay: 1,
    });
            
    const fadeInP = useFadeIn({
        duration: 5,
        delay: 2,
        timing: "linear"
    });

    return (
        <div className="App">
            <h1 { ...fadeInH1 }>use fade in</h1>
            <p { ...fadeInP }>p test</p>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);