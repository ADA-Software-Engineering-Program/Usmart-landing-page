import React from 'react';
import logo from '../assets/logo-transparent.png';

const Footer = () => {
	return (
		<section className="footer">
			<img src={logo} alt="u-smart logo" className="img-logo" />
			<h3>&copy; Copyrights 2023 ADAPROJECT All rights reserved.</h3>
		</section>
	);
};

export default Footer;
