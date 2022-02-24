import React from 'react';
import ReactPlayer from 'react-player';
import { Video } from '../Interfaces/interfaces';
import { useNavigate } from 'react-router-dom';

import './VideoItem.css';
import { deleteVideo } from '../../api/requests';

interface Props {
	video: Video;
	getAllVideos: () => void;
}

const VideoItem = ({ video, getAllVideos }: Props) => {
	const navigate = useNavigate();

	const handleDeleteVideo = async (id: string) => {
		await deleteVideo(id);
		getAllVideos();
	};
	return (
		<div key={video._id} style={{ width: '380px', margin: '1rem' }}>
			<div className="card card-body video-card">
				<div className="d-flex justify-content-between">
					<h1 onClick={() => navigate(`update/${video._id}`)}>{video.title}</h1>
					<span
						style={{ color: 'red', fontWeight: 'bolder' }}
						onClick={() => video._id && handleDeleteVideo(video._id)}
					>
						X
					</span>
				</div>
				<div className="embed-responsive embed-responsive-16by9">
					<ReactPlayer width="100%" height="100%" url={video.url} />
				</div>

				<h3>{video.description}</h3>
			</div>
		</div>
	);
};

export default VideoItem;
