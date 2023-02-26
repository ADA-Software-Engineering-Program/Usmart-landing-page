import React from 'react';
import ChooseAvatar from './ChooseAvatar';
import StartPlaying from './StartPlaying';
import './styles.css';

const MainSection = () => {
	return (
		<section className="main-section-bg">
			<ChooseAvatar />
			<StartPlaying />
		</section>
	);
};

export default MainSection;
