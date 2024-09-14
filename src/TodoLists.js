import React from "react";
import { TiDelete } from "react-icons/ti";

const TodoLists = (props) => {
  return (
    <>
      <div className="todo_style">
      
        <li> <TiDelete
            className="cross"
            onClick={() => {
              props.onSelect(props.id);
            }}
          />{props.text}</li>;
      </div>
    </>
  );
};

export default TodoLists;
