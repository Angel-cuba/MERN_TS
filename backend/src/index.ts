import app from './app';
import './db/db';

app.listen(3001, () => {
	console.log('Server running in port 3001');
});
