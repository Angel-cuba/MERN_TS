import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

(async () => {
	try {
		const db = await mongoose.connect(
			`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lquq3.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
		);
		console.log('Database connection established in---> ' + db.connection.name);
	} catch (error) {
		console.error('Error connecting to Mongo', error);
	}
})();
