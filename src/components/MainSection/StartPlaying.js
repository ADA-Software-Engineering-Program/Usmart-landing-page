import React from 'react';
import phone from '../../assets/blank_phone.svg';
import { badges } from '../../utils/data';
import { OtherButton } from '../Button/Button';
import Card from '../Card/Card';
import ChatSection from './ChatSection';
import VideoTutorial from './VideoTutorial';

const StartPlaying = () => {
	return (
		<>
			<section className="new-main-section">
				<section className="start-playing-section" data-aos="fade-right">
					<div>
						<img src={phone} alt="phone" />
					</div>
					<div data-aos="fade-left" className="start-playing-description">
						<h1 className="start-playing-heading">Start Playing</h1>
						<p className="start-playing-heading-description">
							Playing is easy. You click on "Start", then pick a category. Once
							you do that, you play to win. Make sure you don’t lose hearts
							along the way.
						</p>
						<p className="start-playing-heading-description">
							There are various categories you can pick from, go ahead and
							select whatever you want. Play as many times as you want from
							different categories.
						</p>
						<OtherButton text="Play Game" />
					</div>
				</section>
				<h1 className="award-heading">Awards</h1>
				<div className="awards-container" data-aos="fade-up">
					{badges.map((bdg) => (
						<Card item={bdg} />
					))}
				</div>
				<VideoTutorial />
				<ChatSection />
				{/* <ChatIcon /> */}
			</section>
		</>
	);
};

export default StartPlaying;
