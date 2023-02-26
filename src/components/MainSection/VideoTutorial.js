import React, { useState } from 'react';
import YouTube from 'react-youtube';
import videobox from '../../assets/videobox.svg';

const VideoTutorial = () => {
	const [isYoutube, setIsYoutube] = useState(false);
	return (
		<div>
			<h1 className="video-heading">Watch Video Tutorial Below</h1>
			<div data-aos="fade-up">
				{isYoutube ? (
					<YouTube videoId={'Ktuc_N4L2SU'} className="vidbox-img" />
				) : (
					<img
						src={videobox}
						className="vidbox-img"
						alt="video-img"
						onClick={() => setIsYoutube(true)}
					/>
				)}
			</div>
		</div>
	);
};

export default VideoTutorial;
