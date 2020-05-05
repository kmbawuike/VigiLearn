import React, { useState, Fragment } from 'react';
import Course01 from '../assets/images/course01.jpg';

const MyCourses = () => {
	return (
		<Fragment>
			<section class="charts">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-6">
							<div class="chart-container">
								<div class="course">
									<a href="#" class="course-img">
										<img src={Course01} alt="" />
										<i class="course-link-icon fa fa-link" />
									</a>
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
						<div class="col-md-6">
							<div class="chart-container">
								<div class="course">
									<a href="#" class="course-img">
										<img src={Course01} alt="" />
										<i class="course-link-icon fa fa-link" />
									</a>
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
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default MyCourses;
