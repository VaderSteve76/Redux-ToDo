import React, { Component } from 'react';
import Todos from './Components/todos';
import TodoForm from './Components/todoForm';
import { connect } from 'react-redux';
import { addTodo } from './Actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addTodo = () => {
    const { todoText } = this.state;
    const newTodo = {
      id: this.props.todos.length + 1,
      completed: false,
      text: todoText
    }
    this.props.addTodo(newTodo);
    this.setState({ todoText: '' });
  }

  render() {
    return (
      <div className="App">
        <TodoForm
          changeHandler={this.changeHandler}
          todoText={this.state.todoText}
          addTodo={this.addTodo}
        />
        <Todos todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    name: state.name
  };
};

export default connect(mapStateToProps, { addTodo })(App);
