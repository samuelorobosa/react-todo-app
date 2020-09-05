import React,{Component} from 'react'
import "./inputText.css"

class InputText extends Component {
	constructor(props) {
			super(props)
		
			this.state = {
				 message: "",
			}
		}

handleInput = (event) =>{
	this.setState(
			{
				message: event.target.value
			}
		)
}

	render() {
		return (
			<div className="tc">
			<form onSubmit={this.onSubmit}>
				<input placeholder="Add Todo" value={this.state.message} type="text" onChange={this.handleInput} className="input_color" />
				<button className="buttonStyle" value="Add" onClick={this.props.addToList}> Add </button>
			</form>
			</div>
		)
	}
}
 
export default InputText

