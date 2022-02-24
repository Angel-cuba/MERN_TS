import { useEffect, useState } from 'react';
import { getAllVideos } from '../../api/requests';
import { Video } from '../Interfaces/interfaces';
import VideoItem from './VideoItem';

const VideoList = () => {
	const [videos, setVideos] = useState<Video[]>([]);

	useEffect(() => {
		getAllVideos()
			.then((response) => response.json())
			.then((data) => setVideos(data));
	}, []);
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'space-around',
				flexWrap: 'wrap',
			}}
		>
			{videos.map((video, index) => (
				<div key={index}>
					<VideoItem video={video} />
				</div>
			))}
		</div>
	);
};

export default VideoList;
