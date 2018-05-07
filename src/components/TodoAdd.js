import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addTodo} from "../AC";


class TodoAdd extends Component {
	state = {
		newTodo: ''
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleAdd}>
					<button type={'submit'}>add todo</button>
					<input type={'text'} onChange={this.handleInput} value={this.state.newTodo}
					       placeholder={'todo text..'}/></form>
			</div>
		);
	}


	handleAdd = ev => {
		ev.preventDefault()

		if (this.state.newTodo.length) {
			this.props.addTodo(this.state.newTodo)
			this.setState({newTodo: ''})
		}
	}

	handleInput = ev => {
		const {value} = ev.target;
		this.setState({newTodo: value})
	}
}

TodoAdd.propTypes = {};

export default connect(null, {addTodo})(TodoAdd);
