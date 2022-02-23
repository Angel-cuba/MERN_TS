import React from 'react';
import { Video } from '../Interfaces/interfaces';

interface Props {
	video: Video;
}

const VideoItem = ({ video }: Props) => {
	return (
		<div key={video._id}>
			<h1>{video.title}</h1>
			<h2>{video.url}</h2>
			<h3>{video.description}</h3>
		</div>
	);
};

export default VideoItem;
