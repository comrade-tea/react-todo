import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
	render() {
		return (
			<div className={'header'}>
				<div className="header__title">TODO list</div>
				<button>delete competed</button>
			</div>
		);
	}
}

Header.propTypes = {};

export default Header;
