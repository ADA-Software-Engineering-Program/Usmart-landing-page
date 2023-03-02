import React from 'react';
import chat_bubbles from '../../assets/chat_bubbles.svg';

const ChatSection = () => {
	return (
		<a href="https://click.pstmrk.it/2sm/chatbot.appypie.com%2Fmobilebot.html%3Fcid%3D63ff5a8dd89acf5c73cb002d%26botid%3DBOTID1677679263782%26agent%3D63ff5a8dd89acf5c73cb002d%26utm_source%3Dchatbot_transactional%26utm_medium%3Demail%26utm_campaign%3Dtrialwithoutcreditcard%26utm_content%3Dwelcometoappypiechatbot!/MTZF4TgN/DkpR/L9elHRErW9/Q2hhdGJvdF9mcmVldXNlcl9tYWlsMDFfV2VsY29tZXRvQXBweVBpZUNoYXRib3QhfQ">
			<section
				className="chatbox-section"
				data-aos="fade-up"
				data-aos-delay="700"
			>
				<div>
					<p>Have Questions?</p>
					<h1 className="chatbox-heading">Chat Us Up</h1>
				</div>
				<div className="chat_bubbles">
					<img src={chat_bubbles} alt="chat_bubbles" />
				</div>
			</section>
		</a>
	);
};

export default ChatSection;

export const ChatIcon = () => {
	return (
		<a
			href="https://click.pstmrk.it/2sm/chatbot.appypie.com%2Fmobilebot.html%3Fcid%3D63ff5a8dd89acf5c73cb002d%26botid%3DBOTID1677679263782%26agent%3D63ff5a8dd89acf5c73cb002d%26utm_source%3Dchatbot_transactional%26utm_medium%3Demail%26utm_campaign%3Dtrialwithoutcreditcard%26utm_content%3Dwelcometoappypiechatbot!/MTZF4TgN/DkpR/L9elHRErW9/Q2hhdGJvdF9mcmVldXNlcl9tYWlsMDFfV2VsY29tZXRvQXBweVBpZUNoYXRib3QhfQ"
			className="chat_section_sticky_icon"
		>
			<img src={chat_bubbles} alt="chat icon" />
		</a>
	);
};
