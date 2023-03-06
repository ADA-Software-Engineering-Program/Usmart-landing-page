import React from 'react';
import './styles.css';

export const PrimaryButton = ({ text }) => {
	return (
		<button className="primary-btn btn">
			<a
				href="https://firebasestorage.googleapis.com/v0/b/usmart-baff2.appspot.com/o/usmart-apk.apk?alt=media&token=15c4eddf-cd0b-48b1-b333-0c8ffb1fc2af"
				download
			>
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
			<a
				href="https://firebasestorage.googleapis.com/v0/b/usmart-baff2.appspot.com/o/usmart-apk.apk?alt=media&token=15c4eddf-cd0b-48b1-b333-0c8ffb1fc2af"
				download
			>
				{text}
			</a>
		</button>
	);
};
