import React from 'react';
import Button from './Button';

const HeroSection = () => {
	return (
		<main className="hero-section">
			<section>
				<h1>Trivia Time!</h1>
				<p>
					Download U-Smart today and play trivia games that will change you.
				</p>
				<h2>About App</h2>
				<p>
					UU-SMART trivia game is a fun and engaging way to test your knowledge
					on various topics. Players can download the app onto their mobile
					devices and select a category to play, such as General Knowledge,
					history, Science, Music and Animals The app will then present a series
					of questions with multiple-choice answers, and the player must select
					the correct answer. As players progress through the game, they can
					earn points and unlock new levels. U-SMART trivia game is a great way
					to challenge yourself and learn new things while having fun. They can
					be played anytime, anywhere, and are suitable for all ages. With a
					vast array of topics to choose from, there is always something new to
					learn and explore.
				</p>
				<Button text="Learn More" />
			</section>
			<section>Big Phone Imges</section>
		</main>
	);
};

export default HeroSection;
