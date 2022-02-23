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
		<div>
			{videos.map((video) => (
				<VideoItem video={video} />
			))}
		</div>
	);
};

export default VideoList;