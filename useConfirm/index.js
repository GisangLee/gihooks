import React from "react";
import ReactDOM from "react-dom";
import { useConfirm } from "./useConfirm";

const App = () => {
    const deleteWord = () => console.log("deleting...");
    const confirmDelte = useConfirm("are you sure?", deleteWord);

    return (
        <div className="App">
            <button onClick={ confirmDelte }>Delete the word</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);