import React, { useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import './styles.css';

const Header = () => {
	const header = useRef(null);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				header.current.classList.add('header--scrolled');
			} else {
				header.current.classList.remove('header--scrolled');
			}
		});
	}, []);

	return (
		<header className="header" ref={header}>
			<a href="/">
				<img src={logo} alt="u-smart logo" className="img-logo" />
			</a>
		</header>
	);
};

export default Header;
