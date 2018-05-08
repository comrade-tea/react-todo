import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {toggleTodo} from '../../AC/index'


class Index extends Component {
	render() {
		const {todo} = this.props
		return (
			<div className="todo-item" onClick={this.handleComplete}>
				<i className={'mr-2 mdi ' + this.checkComplete()}></i>
				<span className="noselect"><b>{todo.title}</b></span>
			</div>
		);
	}

	handleComplete = () => {
		const {todo} = this.props

		this.props.toggleTodo(todo.id)
	}

	checkComplete() {
		const {todo} = this.props
		if (todo.isCompleted) return 'mdi-check-circle-outline';
		return 'mdi-circle-outline'
	}
}

Index.propTypes = {};

export default connect(null, {toggleTodo})(Index);
