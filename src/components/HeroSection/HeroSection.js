import React, { useEffect, useRef } from 'react';
import { PrimaryButton, TransparentButton } from '../Button/Button';
import { features } from '../../utils/data';
import three_phones from '../../assets/three_phones.svg';
import shadow from '../../assets/shadow.svg';
import Header from '../Header/Header';
import './styles.css';

const HeroSection = ({ setIsChatBotVisible }) => {
	const targetRef = useRef(null);

	useEffect(() => {
		let current = targetRef.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsChatBotVisible(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.5,
			}
		);

		if (current) {
			observer.observe(current);
		}

		return () => {
			if (current) {
				observer.unobserve(current);
			}
		};
	}, [targetRef, setIsChatBotVisible]);
	return (
		<main className="hero-section">
			<Header />
			<section className="hero-section-banner">
				<div data-aos="fade-right">
					<h1 className="hero-heading">Compete to Earn the Highest Badge</h1>

					<p className="hero-heading-description" ref={targetRef}>
						Download U-Smart today and play trivia games that will challenge
						you!
					</p>
					<div className="hero-button-container">
						<PrimaryButton
							text="Download Now"
							style={{ background: 'white', color: 'primary' }}
						/>
						<TransparentButton
							text="Learn More"
							style={{ color: 'white', border: 'primary' }}
						/>
					</div>
				</div>
				<div className="hero-image-section">
					<img src={three_phones} alt="hero-badge" className="banner-image" />
					<img src={shadow} alt="hero-badge-shadow" className="shadow" />
				</div>
			</section>
			<section className="hero-section-features">
				<div>
					{features.slice(0, 2).map((feat) => (
						<div>
							<h2 className="features-heading">{feat.title}</h2>
							<p>{feat.text}</p>
						</div>
					))}
				</div>
				<div>
					{features.slice(2, 4).map((feat) => (
						<div>
							<h2 className="features-heading">{feat.title}</h2>
							<p>{feat.text}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
};

export default HeroSection;
