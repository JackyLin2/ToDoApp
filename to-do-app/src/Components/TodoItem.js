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
                </h1>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem