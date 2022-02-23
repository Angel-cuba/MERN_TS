import app from './app';
import './db/db';
import { config } from 'dotenv';
config();

app.listen(process.env.PORT, () => {
	console.log('Server running in port: ' + process.env.PORT);
});
