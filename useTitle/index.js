import React from "react";
import ReactDOM from "react-dom";
import { useTitle } from "./useTitle";

const App = () => {
    const titleUpdater = useTitle("Loading....");

    // titleUpdater를 어디선가 호출하면 useEffect에 의해서 HTML title이 변경된다. 

    return (
        <div className="App">
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);