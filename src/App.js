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

  const deleteItem = (id) => {
    console.log("deleted");
  
  setItems((olditems) => {
    return olditems.filter((arrElm, index) => {
      return index !==id;
    });
  });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Add a Items"
            value={inputlist}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li>{inputlist}</li> */}

            {items.map((itemval, index) => {
              return (
                <TodoLists
                  id={index}
                  key={index}
                  text={itemval}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
  };

export default App;
