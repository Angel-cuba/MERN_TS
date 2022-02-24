import { Video } from '../components/Interfaces/interfaces';

export const getAllVideos = async () => await fetch('http://localhost:3001/videos');

export const getVideo = async (id: string) => await fetch(`http://localhost:3001/video/${id}`);

export const createVideo = async (video: Video) =>
	await fetch('http://localhost:3001/video', {
		method: 'POST',
		body: JSON.stringify(video),
		headers: { 'Content-Type': 'application/json' },
	});

export const updateVideo = async (id: string, video: Video) =>
	await fetch(`http://localhost:3001/video/${id}`, {
		method: 'PUT',
		body: JSON.stringify(video),
		headers: { 'Content-Type': 'application/json' },
	});

export const deleteVideo = async (id: string) =>
	await fetch(`http://localhost:3001/video/${id}`, {
		method: 'DELETE',
	});
