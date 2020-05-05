import React, { useState, Fragment } from 'react';
import Course01 from '../assets/images/course01.jpg';
import Request from '../util/httpRequest';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import {url} from '../util/baseUrl'

const request = new Request();
const AllCourses = () => {
	const [ courses, setCourses ] = useState([]);
	const getCourses = async () => {
		const courses = await request.get( `${url}courses`);
		setCourses(courses);
	};
	useEffect(() => {
		getCourses();
	}, []);
	return (
		<Fragment>
			<section class="charts">
				<div class="container-fluid">
					<div class="row">
						{courses &&
							courses.map((item) => (
								<div class="col-md-6">
									<div class="chart-container">
										<div class="course">
										<Link to= {`/courses/${item.id}`} className="course-img">
											
												<img src={item.coverPhoto} alt="" />
												<i class="course-link-icon fa fa-link" />
											
											</Link>
											<a class="course-title" href="#">
												Beginner to Pro in Excel: Financial Modeling and Valuation
											</a>
											<div class="course-details">
												<span class="course-category">Business</span>
												<span class="course-price course-free">Free</span>
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default AllCourses;
