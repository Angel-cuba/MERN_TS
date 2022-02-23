import { RequestHandler } from 'express';

export const getAllVideos: RequestHandler = (req, res) => {
	res.send('show all videos here...');
};

export const getVideo: RequestHandler = (req, res) => {
	res.send('show video here...');
};

export const createVideo: RequestHandler = (req, res) => {
	res.send('create video here...');
};

export const updateVideo: RequestHandler = (req, res) => {
	res.send('update video here...');
};

export const deleteVideo: RequestHandler = (req, res) => {
	res.send('delete video here...');
};
