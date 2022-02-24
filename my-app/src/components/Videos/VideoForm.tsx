import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { createVideo } from '../../api/requests';
import { Video } from '../Interfaces/interfaces';
import { useNavigate } from 'react-router-dom';

const VideoForm = () => {
	const [video, setVideo] = useState<Video>({
		title: '',
		description: '',
		url: '',
	});

	const navigate = useNavigate();

	const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setVideo({
			...video,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await createVideo(video)
			.then((response) => toast.success('New video added successfully'))
			.catch((err) => console.log(err));

		navigate('/');
	};

	return (
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="card">
					<div className="card-body">
						<h3>New video</h3>
						<form onSubmit={handleSubmit}>
							<div className="form-group mb-3">
								<input
									type="text"
									name="title"
									value={video.title}
									placeholder="Write a title for the new video"
									className="form-control"
									onChange={handleInput}
									autoFocus
								/>
							</div>
							<div className="form-group mb-3">
								<input
									type="text"
									name="url"
									value={video.url}
									className="form-control"
									onChange={handleInput}
									placeholder="https://something.com"
								/>
							</div>
							<div className="form-group mb-3">
								<textarea
									name="description"
									value={video.description}
									className="form-control"
									onChange={handleInput}
									rows={3}
									placeholder="Write a description"
								></textarea>
							</div>
							<button className="btn btn-primary ">Create a new video</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoForm;
