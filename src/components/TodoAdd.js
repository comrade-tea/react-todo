import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addTodo} from "../AC";


class TodoAdd extends Component {
	state = {
		newTodo: '',
		isValid: true
	}

	render() {
		return (
			<div>
				<form className="input-group" onSubmit={this.handleAdd}>
					<button type={'submit'}><i className="mdi mdi-plus"></i></button>
					<input className={`form-control ${this.checkValid()}`} type={'text'} onChange={this.handleInput}
					       value={this.state.newTodo}
					       placeholder={'todo text..'}/></form>
			</div>
		);
	}

	checkValid() {
		if (this.state.isValid) return ''
		return 'border-danger'
	}

	handleAdd = ev => {
		ev.preventDefault()

		if (this.state.newTodo.trim().length > 3) {
			this.props.addTodo(this.state.newTodo.trim())
			this.setState({newTodo: '', isValid: true})
		}
		else {
			this.setState({isValid: false})
		}
	}

	handleInput = ev => {
		const {value} = ev.target;
		this.setState({newTodo: value})

		if (this.state.newTodo.trim().length > 3) this.setState({isValid: true})
	}
}

TodoAdd.propTypes = {};

export default connect(null, {addTodo})(TodoAdd);
