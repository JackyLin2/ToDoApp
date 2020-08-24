import React from 'react';
import Todos from './Components/Todos'


class App extends React.Component {
    state = {
        todos: [
          {
            id:1,
            title: 'Take out the trash',
            completed: false
          },
          {
            id:2,
            title: 'Learn React',
            completed: false
          },
          {
            id:3,
            title: 'Apply to Jobs',
            completed: false
          },
          {
            id:4,
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

  render(){
      
       return(
         <div className="App">
           <Todos todos={this.state.todos} taskComplete={this.taskComplete}  deleteTodo={this.deleteTodo}/>
         </div>
       )
  }
}

export default App;
