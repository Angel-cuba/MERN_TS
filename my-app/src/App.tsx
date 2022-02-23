import { Routes, Route } from 'react-router-dom';
import VideoForm from './components/Videos/VideoForm';
import VideoList from './components/Videos/VideoList';

function App() {
	return (
		<Routes>
			<Route path="/" element={<VideoList />} />
			<Route path="/newvideo" element={<VideoForm />} />
		</Routes>
	);
}

export default App;
