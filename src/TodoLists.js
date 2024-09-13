import React from 'react'

const TodoLists = (props) => {
  return (
    <>
    <div className='todo_style'>
   
    
    <li>  {props.text}</li>;
    </div>
    </>
  )
}

export default TodoLists