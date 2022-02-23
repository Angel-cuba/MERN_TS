import { RequestHandler } from 'express';
import Video from '../models/Video';

export const getAllVideos: RequestHandler = async (req, res) => {
	try {
		const allVideos = await Video.find();
		return res.json(allVideos);
	} catch (error) {
		res.json(error);
	}
};

export const getVideo: RequestHandler = async (req, res) => {
	const video = await Video.findById(req.params.id);
	if (!video) return res.status(204).json();
	return res.send(video);
};

export const createVideo: RequestHandler = async (req, res) => {
	const existingVideo = await Video.find({ url: req.body.url });
	if (existingVideo) return res.status(301).json({ message: 'Video already exists' });
	const video = new Video(req.body);
	const response = await video.save();
	return res.json(response);
};

export const updateVideo: RequestHandler = async (req, res) => {
	const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
	if (!video) return res.status(204).json();

	res.json(video);
};

export const deleteVideo: RequestHandler = async (req, res) => {
	const video = await Video.findByIdAndDelete(req.params.id);
	if (!video) return res.status(204).json();
	return res.json(video);
};
