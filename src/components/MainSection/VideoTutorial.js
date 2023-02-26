import React from 'react';
import videobox from '../../assets/videobox.svg';

const VideoTutorial = () => {
	return (
		<div>
			<h1 className="video-heading">Watch Video Tutorial Below</h1>
			<div>
				<img src={videobox} className="vidbox-img" alt="video-img" />
			</div>
		</div>
	);
};

export default VideoTutorial;
