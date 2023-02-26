import React from 'react';
import phone from '../../assets/blank_phone.svg';
import card1 from '../../assets/card1.svg';
import card2 from '../../assets/card2.svg';
import card3 from '../../assets/card3.svg';
import { OtherButton } from '../Button/Button';
import ChatSection from './ChatSection';
import VideoTutorial from './VideoTutorial';

const StartPlaying = () => {
	return (
		<>
			<section className="new-main-section">
				<section className="start-playing-section">
					<div>
						<img src={phone} alt="phone" />
					</div>
					<div className="start-playing-description">
						<h1 className="start-playing-heading">Start Playing</h1>
						<p className="start-playing-heading-description">
							Playing is easy you just have to click start then pick a category,
							once you do that you play to win, make sure you don’t loose hearts
							along the way.
						</p>
						<p className="start-playing-heading-description">
							They are various categories you can pick from, go ahead and select
							whatever you want. play as much from different categories.
						</p>
						<OtherButton text="Play Game" />
					</div>
				</section>
				<h1 className="award-heading">Awards</h1>
				<div className="awards-container">
					<img src={card1} alt="card-1" />
					<img src={card2} alt="card-2" />
					<img src={card3} alt="card-3" />
				</div>
				<VideoTutorial />
				<ChatSection />
			</section>
		</>
	);
};

export default StartPlaying;
