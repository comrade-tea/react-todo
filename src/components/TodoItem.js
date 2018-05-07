import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {completeTodo} from "../AC/index";


class TodoItem extends Component {
	render() {
		const {todo} = this.props
		return (
			<div className={this.checkComplete()}>
				<b>{todo.title}</b>
				<button onClick={this.handleComplete}>delete</button>
			</div>
		);
	}

	handleComplete = () => {
		const {todo} = this.props
		console.log("----", todo.id)

		this.props.completeTodo(todo.id)
	}

	checkComplete() {
		const {todo} = this.props

		if (todo.isCompleted) return 'completed';
	}
}

TodoItem.propTypes = {};

export default connect(null, {completeTodo})(TodoItem);
