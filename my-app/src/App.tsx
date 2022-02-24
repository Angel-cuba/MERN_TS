import { Routes, Route } from 'react-router-dom';
import VideoForm from './components/Videos/VideoForm';
import VideoList from './components/Videos/VideoList';

function App() {
	return (
		<div className="container p-4">
			<Routes>
				<Route path="/" element={<VideoList />} />
				<Route path="/newvideo" element={<VideoForm />} />
			</Routes>
		</div>
	);
}

export default App;
