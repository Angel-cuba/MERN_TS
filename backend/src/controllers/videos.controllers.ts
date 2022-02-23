import { RequestHandler } from 'express';
import Video from '../models/Video';

export const getAllVideos: RequestHandler = (req, res) => {
	res.send('show all videos here...');
};

export const getVideo: RequestHandler = (req, res) => {
	res.send('show video here...');
};

export const createVideo: RequestHandler = async (req, res) => {
	const existingVideo = await Video.find({ url: req.body.url });
	if (existingVideo) return res.status(301).json({ message: 'Video already exists' });
	const video = new Video(req.body);
	const response = await video.save();
	res.json(response);
};

export const updateVideo: RequestHandler = (req, res) => {
	res.send('update video here...');
};

export const deleteVideo: RequestHandler = (req, res) => {
	res.send('delete video here...');
};
