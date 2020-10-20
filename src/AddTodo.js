import React, { Component } from 'react'

class AddTodo extends Component {
	
	state = {
		content: ""
	}
	handleChange = (e) => {
		this.setState({
			content: e.target.value
			
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addTodo(this.state)
		e.target.reset()
	}
	render() {
	return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<input placeholder="Add new todo" type="text" onChange={this.handleChange}></input>
			</form>
		</div>
	)
	}
}

export default AddTodo