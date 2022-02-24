import React from 'react';
import ReactPlayer from 'react-player';
import { Video } from '../Interfaces/interfaces';

interface Props {
	video: Video;
}

const VideoItem = ({ video }: Props) => {
	return (
		<div key={video._id} style={{ width: '100%', margin: '1rem' }}>
			<div className="card card-body">
				<div className="d-flex justify-content-between">
					<h1>{video.title}</h1>
					<span style={{ color: 'red', fontWeight: 'bolder' }}>X</span>
				</div>
				<div className="embed-responsive embed-responsive-16by9">
					<ReactPlayer url={video.url} />
				</div>

				<h3>{video.description}</h3>
			</div>
		</div>
	);
};

export default VideoItem;
