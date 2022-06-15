import React from "react";
import ReactDOM from "react-dom";
import { useNetwork } from "./useNetwork";

const App = () => {

    const handleNetworkChange = (online) => {
        console.log(online ? "We just wend online" : "We are offline");
    };

    const onLine = useNetwork(handleNetworkChange);

    return (
        <div className="App">
            <h1 { ...onLine ? "Online" : "Offline" }>use fade in</h1>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);