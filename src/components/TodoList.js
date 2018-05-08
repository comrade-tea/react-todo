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
			<ul className="card card-body">
				{this.handleEmpty(todosList)}
				{todosList}
			</ul>
		);
	}

	handleEmpty(array) {
		if (!array.length) return <li><em>nothing to show!</em></li>
	}
}

TodoList.propTypes = {};

export default connect((state) => {
	return {
		todos: state.todos.toSeq().toArray()
	}
}, {loadAllTodos})(TodoList);