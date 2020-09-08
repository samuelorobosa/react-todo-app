import React from 'react'
import './TodoItem.css'

class TodoItem extends React.Component {
	crossOut = () =>{
		return {
			textDecoration: this.props.todo.completed?
			"line-through" : "none"
		}

	}


	render() {
		return (
			<div className="container" style={this.crossOut()}>
			<input type="checkbox" onChange = {this.props.finishTask.bind
				(this, this.props.todo.id) />
			<div> {this.props.todo.message} </div>
			<div> {this.props.todo.date} </div>
			<div onClick = {this.props.deleteTodo.bind(
				this, this.props.todo.id)} className="delete"> &#9988; </div>

			</div>
		)
	}
}

export default TodoItem
