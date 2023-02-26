import React from 'react';
import './styles.css';

export const PrimaryButton = ({ text }) => {
	return <button className="primary-btn btn">{text}</button>;
};
export const TransparentButton = ({ text }) => {
	return <button className="transparent-btn btn">{text}</button>;
};
export const OtherButton = ({ text }) => {
	return <button className="other-btn btn">{text}</button>;
};
