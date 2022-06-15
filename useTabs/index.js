import React from "react";
import ReactDOM from "react-dom";
import { useTabs } from "./useTabs";


const App = () => {
    const content = [
        {
          tab: "Section 1",
          content: "I'm the One"
        },
    
        {
          tab: "Section 2",
          content: "I'm the Two"
        }
    ];

    const { currentItem, changeItem } = useTabs(0, content);

    return (
      <div className="App">
        { content.map(
          (section, index) => (
              <button onClick={ () => changeItem(index) }>
                  { section.tab }
              </button>
          )
        )}
  
        <div>
            { currentItem.content }
        </div>
  
      </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);