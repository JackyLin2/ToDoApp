import React from 'react';
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types'


class Todos extends React.Component {

  render(){
      console.log(this.props.todos)
       return this.props.todos.map((todo) => (
       <TodoItem key={todo.id}  todo={todo} taskComplete={this.props.taskComplete}/>
       ))
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;