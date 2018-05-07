import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from "./Todo";

class TodoApp extends Component {
	render() {
		return (
			<div className={'container'}>
				<div className={'todo-app'}>
					<Todo/>
				</div>
			</div>
		);
	}
}

TodoApp.propTypes = {};

export default TodoApp;
