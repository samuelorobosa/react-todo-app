import React from 'react'
import './App.css'
import Todos from './components/Todos'
import InputTodo from "./components/InputTodo"
import Attribution from './components/Attribution'

class App extends React.Component {
		constructor(props) {
			super(props)
		
			this.state = {
				 todos:[]
			}
		}



saveToLocal = () =>{
	const local = this.state.todos;
	window.localStorage.setItem('todos', JSON.stringify(local))
}


finishTask = (id) =>{


	this.setState(
			{
				todos: this.state.todos.map (todo => {
					if(todo.id === id){
						todo.completed = !todo.completed
					}
					return todo
				}
				)
			}, this.saveToLocal
		)
}


deleteTodo = (id) => {
	this.setState(
			{
				todos: [...this.state.todos.filter(
					(todo) => todo.id !== id	
					)]
			},
			this.saveToLocal
		)
}


componentDidMount(){
	const parsed = JSON.parse(localStorage.getItem("todos"));
	this.setState({todos: parsed === null ? []:parsed,})
}

inputTodo = (message)=>{

	const newTodo = { 
		id: Date.now(),
		message,
		date: new Date().toLocaleTimeString(),
		completed: false
	}

  this.setState({todos:[...this.state.todos, newTodo]}, this.saveToLocal
)
}




	render() {
		return (
			<div>
			<h1>Todo App</h1>
			<InputTodo inputTodo={this.inputTodo}/>
			  <Todos todos={this.state.todos} finishTask = {this.finishTask} deleteTodo = {this.deleteTodo} crossOut = {this.crossOut} />
			  <Attribution />
			</div>
		)
	}
}

export default App