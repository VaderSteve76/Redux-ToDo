import React, { Component } from 'react';

const TodoForm = props => {
  return(
    <div>
      <input
        type='text'
        placeHolder='Add ToDo'
        name='todoText'
        value={props.todoText}
        onChange={props.changeHandler}
      />
      <button onClick={props.addTodo}>Add ToDo</button>
    </div>
  )
}

export default TodoForm;