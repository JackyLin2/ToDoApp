import React from 'react';
import Todos from './Components/Todos'
import Header from './Components/Header'
import AddToDo from './Components/AddToDo'
import uuid from 'uuid'

class App extends React.Component {
    state = {
        todos: [
          {
            id: uuid.v4(),
            title: 'Take out the trash',
            completed: false
          },
          {
            id: uuid.v4(),
            title: 'Learn React',
            completed: false
          },
          {
            id: uuid.v4(),
            title: 'Apply to Jobs',
            completed: false
          },
          {
            id: uuid.v4(),
            title: 'Date Night',
            completed: false
          }
        ]
    }

    taskComplete = (id) => {
      this.setState({
          todos: this.state.todos.map((todo) => {
              if(todo.id === id){
                todo.completed = !todo.completed
              }
              return todo;
          })
      })
    }

    deleteTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id) ]})
    }

    addTodo = (title) => {
      const newTodo={
        id: uuid.v4(), 
        title,
        completed: false
      }
       this.setState({todos: [...this.state.todos, newTodo]})
    }


  render(){
      
       return(
         <div className="App">
          <div className='container'>
          <Header/>
           <AddToDo addTodo={this.addTodo}/>
           <Todos todos={this.state.todos} taskComplete={this.taskComplete}  deleteTodo={this.deleteTodo}/>
          </div>
         </div>
       )
  }
}

export default App;
