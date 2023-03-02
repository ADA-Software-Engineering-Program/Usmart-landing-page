import React from 'react';
import ChooseAvatar from './ChooseAvatar';
import StartPlaying from './StartPlaying';
import './styles.css';

const MainSection = ({ isChatBotVisible }) => {
	return (
		<section className="main-section-bg">
			<ChooseAvatar />
			<StartPlaying isChatBotVisible={isChatBotVisible} />
		</section>
	);
};

export default MainSection;
