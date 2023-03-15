import React from 'react';
import './styles.css';

export const PrimaryButton = ({ text }) => {
	return (
		<button className="primary-btn btn">
			<a
				href="https://firebasestorage.googleapis.com/v0/b/usmart-baff2.appspot.com/o/usmart-apkv2.apk?alt=media&token=abbe98f4-34f0-44b3-a7fa-31f01365eefd"
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
				href="https://firebasestorage.googleapis.com/v0/b/usmart-baff2.appspot.com/o/usmart-apkv2.apk?alt=media&token=abbe98f4-34f0-44b3-a7fa-31f01365eefd"
				download
			>
				{text}
			</a>
		</button>
	);
};
