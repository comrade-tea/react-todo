import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

class Todo extends Component {
	render() {
		return (
			<div>
				<Header/>
				<TodoList/>
				<TodoAdd/>
			</div>
		);
	}
}

Todo.propTypes = {};

export default Todo;
