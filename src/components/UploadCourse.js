import React, { Fragment, useState } from 'react';
import axios from 'axios'
const UploadCourse = () => {
	
	const [image, setImage] = useState('')
	// const widget = window.cloudinary.createUploadWidget(
	// 	{
	// 		cloudName: 'kelechimbawuike',
    //         uploadPreset: 'vigilearn',
    //         context: {id: '3', user: 'kelechi'},
    //         folder: "Videos",
    //         tag: {type: "image"}
	// 	},
	// 	(err, result) => {}
	// );

	// const showWidget = (e) => {
    //     e.preventDefault()
	// 	widget.open()
	// };

	const uploadImage = (e)=>{
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append("upload_preset", "vigilearn")
		formData.append("file", file)

		axios.post('https://api.cloudinary.com/v1_1/kelechimbawuike', {
			'Content-Type' : 'application/x-www-form-urlencoded'
		}, formData)
		.then(res => setImage(res.data.url))
	}
	return (
		<Fragment>
			<div className="container">
				<form>
					<div class="form-group">
						<label for="email">Course Title</label>
						<input type="email" class="form-control" id="email" />
					</div>

					<div class="form-group">
						<label for="sel1">Category:</label>
						<select class="form-control" id="sel1">
							<option>Frontend</option>
							<option>Backend</option>
							<option>Devops</option>
							<option>UI/UX</option>
						</select>
					</div>

					<div class="form-group">
						<label for="comment">Description:</label>
						<textarea class="form-control" rows="5" id="comment" />
					</div>

                    <div class="form-group">
						<label for="comment">Course:</label>
                        <input type="file" onChange={uploadImage}/>
					</div>


					<button type="submit">
						Submit
					</button>
				</form>
				<img src={image? image : null} alt=""/>
			</div>

			{/* <div>
				<button className="btn" onClick={showWidget}>Upload</button>
			</div> */}
		</Fragment>
	);
};

export default UploadCourse;
