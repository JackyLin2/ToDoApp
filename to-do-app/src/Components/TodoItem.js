import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component{

    getStyle = () => {
        return {
        background: 'gray',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

  


    render(){

        const{id, title} = this.props.todo;


        return(
            <div style={this.getStyle()}>
                <h1>
                    <input type='checkbox' onChange={this.props.taskComplete.bind(this, id)}/>
                    {title}
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStlye}> X </button>
                </h1>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStlye =  {
    background: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem