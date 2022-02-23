import mongoose from 'mongoose';

import keys from '../keytoserver/key';

(async () => {
	try {
		const db = await mongoose.connect(
			`mongodb+srv://${keys.MONGO_USER}:${keys.MONGO_PASSWORD}@cluster0.lquq3.mongodb.net/${keys.MONGO_DBNAME}?retryWrites=true&w=majority`
		);
		console.log('Database connection established in---> ' + db.connection.name);
	} catch (error) {
		console.error('Error connecting to Mongo', error);
	}
})();
