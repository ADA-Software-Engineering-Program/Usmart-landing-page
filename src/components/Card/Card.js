import React from 'react';
import './styles.css';

const Card = ({ item }) => {
	return (
		<div className="card-container">
			<img src={item.image} alt="card-item" />
			<p>{item.text}</p>
		</div>
	);
};

export default Card;
