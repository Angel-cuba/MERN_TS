import { Routes, Route } from 'react-router-dom';
import VideoForm from './components/Videos/VideoForm';
import VideoList from './components/Videos/VideoList';

//Using Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="container p-4">
			<Routes>
				<Route path="/" element={<VideoList />} />
				<Route path="/newvideo" element={<VideoForm />} />
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
