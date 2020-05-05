import React, { Fragment, useState } from 'react';
import './styles.css';
import Logo from '../../assets/images/logo.png';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import AllCourses from '../../components/AllCourses';
import UploadCourse from '../../components/UploadCourse';
import WatchCourse from '../../components/WatchCourse';

const Dashboard = () => {
	const response = () => {
		console.log('ddd');
	};

	const [ toggle, setToggle ] = useState(false);
	const handleToggle = () => {
		setToggle(!toggle);
	};
	return (
		<HashRouter>
			<div className="background-dark">
				<aside class={toggle ? 'side-nav nav-collapse' : 'side-nav'} id="show-side-navigation1">
					<i
						class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg"
						data-close="show-side-navigation1"
						onClick={handleToggle}
					/>

					<ul class="categories">
						<li>
							<i class="fa fa-home fa-fw" />

							<NavLink to="/">Dashboard</NavLink>
						</li>
						<li>
							{/* <i class="fa fa-envelope-open-o fa-fw" /> */}
							<i class="fab fa-leanpub" />

							<NavLink to="/">All Courses</NavLink>
						</li>

						<li>
							<i class="fas fa-upload" />
							<NavLink to="/upload">Upload Course</NavLink>
						</li>
					</ul>
				</aside>
				<section id="contents">
					<nav class="navbar navbar-default">
						<div class="container-fluid">
							<div class="navbar-header">
								<button
									type="button"
									class="navbar-toggle collapsed"
									data-toggle="collapse"
									data-target="#bs-example-navbar-collapse-1"
									aria-expanded="false"
								>
									<i class="fa fa-align-right" />
								</button>
								<a class="navbar-brand" href="#">
									{/* <img src={Logo} alt=""/> */}
									{/* my<span class="main-color">Dashboard</span> */}

									<span className="fa fa-eercast main-icon" />
								</a>
							</div>
							<div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
								<ul class="nav navbar-nav">
									<li>
										<a href="#">
											<i class="fas fa-user" />
										</a>
									</li>

									<li>
										<a href="#">
											<i class="fas fa-sign-out-alt" />
										</a>
									</li>
									<li>
										<a href="#">
											<i data-show="show-side-navigation1" class="fa fa-bars show-side-btn" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					<Route exact path="/" component={AllCourses} />
					<Route path="/courses/:id" component={WatchCourse} />
					<Route path="/upload" component={UploadCourse} />
				</section>
			</div>
		</HashRouter>
	);
};

export default Dashboard;
