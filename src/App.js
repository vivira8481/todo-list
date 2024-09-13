import React, { useState } from "react";
import TodoLists from "./TodoLists";

const App = () => {
  const [inputlist, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((olditems) => {
      return [...olditems, inputlist];
    });
    setInputList("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <input type="text" placeholder="Add a Items" value={inputlist} onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li>{inputlist}</li> */}

            {items.map((itemval) => {
             return<TodoLists text={itemval}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
