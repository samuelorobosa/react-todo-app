import React from 'react'
import "./InputTodo.css"
export class InputTodo extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 message: ''
		}
	}

submitTodo = (event)=>{
	if (this.state.message.length > 0 ){
	event.preventDefault()
	this.props.inputTodo(this.state.message);
	this.setState({
		message: ""
	})	
	}
	
}

updateInput =(event) =>{
	
	this.setState({
		message: event.target.value
	})
}



	render() {
		return (
			<form>
				<input type="text"
				value={this.state.message}
				onChange ={this.updateInput}
				ref="title"
				 required />
				
				<button 
				type="submit"
				value="Add Todo"
				onClick={this.submitTodo}
				> Add Todo 
				</button>
			</form>
		)
	}
}

export default InputTodo