import React, { useState } from 'react';
import avatar1 from '../../assets/avatar1.svg';
import avatar2 from '../../assets/avatar2.svg';
import avatar3 from '../../assets/avatar3.svg';
import './styles.css';

const ChooseAvatar = () => {
	const [animation, setAnimation] = useState(false);
	return (
		<section className="choose-avatar-section">
			<div data-aos="fade-right">
				<h1 className="choose-avatar-heading">Choose Your Avatar</h1>
				<p className="choose-avatar-heading-description">
					Choosse the avatar you like and set your name to have a profile page.
					Here, all your scores and achievements are saved.
				</p>
				<p className="choose-avatar-heading-description">
					You can save and share your profile and achievements to friends and on
					social media.
				</p>
			</div>
			<div
				className="avatar-axis-outer"
				data-aos="fade-left"
				onMouseEnter={() => setAnimation(true)}
				onMouseLeave={() =>
					setTimeout(() => {
						setAnimation(false);
					}, 1000)
				}
				style={{ animationDirection: animation ? 'reverse' : 'normal' }}
			>
				<section className="avatar-axis">
					<img src={avatar1} className="avatar-1" alt="avatar-1" />
					<img src={avatar2} className="avatar-2" alt="avatar-2" />
					<img src={avatar3} className="avatar-3" alt="avatar-3" />
				</section>
			</div>
		</section>
	);
};

export default ChooseAvatar;
