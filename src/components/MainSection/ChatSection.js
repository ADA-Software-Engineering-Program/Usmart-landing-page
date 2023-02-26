import React from 'react';
import chat_bubbles from '../../assets/chat_bubbles.svg';

const ChatSection = () => {
	return (
		<section
			className="chatbox-section"
			data-aos="fade-up"
			data-aos-delay="1000"
		>
			<div>
				<p>Have Questions?</p>
				<h1 className="chatbox-heading">Chat Us Up</h1>
			</div>
			<div className="chat_bubbles">
				<img src={chat_bubbles} alt="chat_bubbles" />
			</div>
		</section>
	);
};

export default ChatSection;
