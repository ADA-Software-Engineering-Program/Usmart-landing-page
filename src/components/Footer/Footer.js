import React from 'react';
import logo from '../../assets/logo.png';
import bg5 from '../../assets/bg-img5.png';
import './styles.css';

const Footer = () => {
	return (
		<section className="footer">
			<img src={logo} alt="u-smart logo" className="img-logo-footer" />
			<h1>&copy; Copyrights 2023 ADAPROJECT All rights reserved.</h1>
			<img src={bg5} className="bg5-img" alt="u-smart logo" />
		</section>
	);
};

export default Footer;
