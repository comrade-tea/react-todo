import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {deleteTodos} from "../AC/index";


class Header extends Component {
	render() {
		return (
			<div className={'header'}>
				<div className="header__title">TODO list</div>
				<button onClick={this.handleDelete}>delete competed</button>
			</div>
		);
	}

	handleDelete = () => {
		this.props.deleteTodos()
	}
}

Header.propTypes = {};

export default connect(null, {deleteTodos})(Header);
