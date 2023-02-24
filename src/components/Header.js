import React from 'react';
import logo from '../assets/logo-transparent.png';

const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="u-smart logo" className="img-logo" />
		</header>
	);
};

export default Header;
