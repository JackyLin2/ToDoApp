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



  render(){
      
       return(
         <div className="App">
           <Todos todos={this.state.todos} />
         </div>
       )
  }
}

export default App;
