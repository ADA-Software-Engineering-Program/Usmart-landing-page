import React from 'react';
import './styles.css';

export const PrimaryButton = ({ text }) => {
	return (
		<button className="primary-btn btn">
			<a href="/public/usmart-apk.apk" download>
				{text}
			</a>
		</button>
	);
};
export const TransparentButton = ({ text }) => {
	return (
		<button className="transparent-btn btn">
			<a href="/#start-playing">{text}</a>
		</button>
	);
};
export const OtherButton = ({ text }) => {
	return (
		<button className="other-btn btn">
			<a href="/public/usmart-apk.apk" download>
				{text}
			</a>
		</button>
	);
};
