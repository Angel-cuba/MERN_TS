import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { Video } from '../Interfaces/interfaces';

const VideoForm = () => {
	const [video, setVideo] = useState<Video>({
		title: '',
		description: '',
		url: '',
	});

	const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setVideo({
			...video,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
									className="form-control"
									onChange={handleInput}
									placeholder="https://something.com"
								/>
							</div>
							<div className="form-group mb-3">
								<textarea
									name="description"
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
