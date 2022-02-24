import { Video } from '../components/Interfaces/interfaces';

export const getAllVideos = async () => await fetch('http://localhost:3001/videos');

export const createVideo = async (video: Video) =>
	await fetch('http://localhost:3001/video', {
		method: 'POST',
		body: JSON.stringify(video),
		headers: { 'Content-Type': 'application/json' },
	});
