import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {loadAllTodos} from "../AC";
import todos from "../fixtures";
import TodoItem from "./TodoItem";


class TodoList extends Component {
	componentWillMount() {
		this.props.loadAllTodos(todos)
	}

	render() {
		const {todos} = this.props;

		const todosList = todos.map(todo => {
			return <li key={todo.id}><TodoItem todo={todo}/></li>
		})

		return (
			<ul>
				{todosList}
			</ul>
		);
	}
}

TodoList.propTypes = {};

export default connect((state) => {
	return {
		todos: state.todos.toArray()
	}
}, {loadAllTodos})(TodoList);