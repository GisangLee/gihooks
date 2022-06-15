import React from "react";
import ReactDOM from "react-dom";
import { useAxios } from "./useAxios";

const App = () => {
    const { loading, error, data, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });

    console.log(`Loading : ${loading}\n Error: ${error}\n data : ${JSON.stringify(data)}\n`);

    return (
        <div className="App">
            <h1>{ data && data.status }</h1>
            <h2> { loading && "Loading..." }</h2>
            <button onClick={ refetch }>Refetch Data</button>
        </div>
    )

};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);