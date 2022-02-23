import { config } from 'dotenv';
config();
export default {
	MONGO_USER: process.env.MONGO_USER,
	MONGO_PASSWORD: process.env.MONGO_PASSWORD,
	MONGO_DBNAME: process.env.MONGO_DBNAME,
};
