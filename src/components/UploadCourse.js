import React, { Fragment, useState, useEffect } from 'react';
import swal from 'sweetalert2';
import Request from '../util/httpRequest';
import {url} from '../util/baseUrl'
import {useHistory} from 'react-router-dom'
const request = new Request();

const UploadCourse = () => {
	const history = useHistory()
	const [ state, setState ] = useState({
		user_id: 1,
		title: '',
		category: 'category',
		description: '',
		course: []
	});

	const [ coverPhoto, setCoverPhoto ] = useState('');
	const [ video, setVideo ] = useState('');

	const handleChange = (e) => {
		const value = e.target.value;
		setState({
			...state,
			[e.target.name]: value
		});
	};

	const uploadImage = (e) => {
		e.preventDefault();
		window.cloudinary.openUploadWidget(
			{
				cloudName: 'kelechimbawuike',
				uploadPreset: 'vigilearn',
				showAdvancedOptions: true
			},
			function(error, result) {
				if (!error && result && result.event === 'success') {
					setCoverPhoto(result.info.secure_url);
				} else {
				}
			}
		);
	};

	const uploadVideo = (e) => {
		e.preventDefault();
		window.cloudinary.openUploadWidget(
			{
				cloudName: 'kelechimbawuike',
				uploadPreset: 'vigilearn',
				showAdvancedOptions: true
			},
			function(error, result) {
				if (!error && result && result.event === 'success') {
					setVideo(result.info.secure_url);
				} else {
					console.log(error);
				}
			}
		);
	};

	const formValidation = () => {
		const { title, category, description } = state;
		if ((!title || !category || !coverPhoto || !video, !description)) {
			return 'All Fields are required';
		} else if (category === 'category') {
			return 'Please select your a category';
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const err = formValidation();
		if (err) {
			swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Validation Error',
				footer: err
			});
		} else {
			request.post(`${url}courses`, {
				user_id: state.user_id,
				title: state.title,
				cover_photo: state.cover_photo,
				designation: state.designation,
				password: state.password,
				category: state.category,
				video: video,
				coverPhoto: coverPhoto
			});
			history.push('/dahboard')
		}
	};

	useEffect(
		() => {
			console.log(state);
			console.log(coverPhoto);
			console.log(video);
		},
		[ state, coverPhoto, video ]
	);

	return (
		<Fragment>
			<div className="container upload-container">
				<form>
					<div className="form-group">
						<label for="title">Course Title</label>
						<input
							type="text"
							className="form-control"
							id="title"
							onChange={handleChange}
							name="title"
							value={state.title}
						/>
					</div>

					<div className="form-group">
						<label>Category:</label>
						<select className="form-control" name="category" onChange={handleChange} value={state.category}>
							<option value="category"> Select a Category...</option>
							<option value="frontend">Frontend</option>
							<option value="backend">Backend</option>
							<option value="devops">Devops</option>
							<option value="ui/ux">UI/UX</option>
						</select>
					</div>

					<div className="form-group" onClick={uploadImage}>
						<label for="comment">Cover Photo:</label>
						<i className="fas fa-upload upload-icon" />
					</div>

					<div className="form-group" onClick={uploadVideo}>
						<label for="comment">Video:</label>
						<i className="fas fa-upload upload-icon" />
					</div>

					<div className="form-group">
						<label for="comment">Description:</label>
						<textarea
							className="form-control"
							rows="5"
							id="comment"
							onChange={handleChange}
							name="description"
							value={state.description}
						/>
					</div>

					<div className="form-group">
						<button className="btn-upload" onClick={handleSubmit}>
							Create Course
						</button>
					</div>
				</form>
				{/* <img src={image? image : null} alt=""/> */}
			</div>

			<div />
		</Fragment>
	);
};

export default UploadCourse;
