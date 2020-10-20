import React, { Component } from 'react';
import Todos from './Todo'
import AddTodo from './AddTodo'

class App extends Component {
	state = {
		todos: [
			{id: 1, content: 'Buy milk.'},
			{id: 2, content: 'Walk the dog.'},
			{id: 3, content: 'Do laundry.'}
		]
	}
	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		})
		this.setState({
			todos
		})
		
	}
	addTodo = todo => {
		todo.id = Math.random()
		let todos = [...this.state.todos, todo]
		this.setState({
			todos
		})
	}
	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">All Todos</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
				<p>Click on todos to delete them.</p>
			</div>
			
  		);
	}
}


export default App;
