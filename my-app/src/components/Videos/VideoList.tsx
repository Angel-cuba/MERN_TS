import { useEffect, useLayoutEffect, useState } from 'react';
import { getAllVideos } from '../../api/requests';
import { Video } from '../Interfaces/interfaces';
import VideoItem from './VideoItem';

const VideoList = () => {
	const [videos, setVideos] = useState<Video[]>([]);
	const [sortedVideos, setSortedVideos] = useState<Video[]>([]);
	console.log(videos);
	console.log(sortedVideos);

	const allVideos = async () => {
		getAllVideos()
			.then((response) => response.json())
			.then((data) => setVideos(data));

		const newVideos = videos
			.map((video) => {
				return {
					...video,
					createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
					updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
				};
			})
			.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

		setSortedVideos(newVideos);
	};
	// useEffect(() => {
	// 	allVideos();
	// }, []);
	useLayoutEffect(() => {
		allVideos();
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
					<VideoItem video={video} getAllVideos={getAllVideos} />
				</div>
			))}
		</div>
	);
};

export default VideoList;
