import React, { Fragment, useState } from 'react';
import './styles.css';
import Logo from '../../assets/images/logo.png';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import DashboardHome from '../../components/DashboardHome';
import Instructors from '../../components/Instructors'
import MyCourses from '../../components/MyCourses'
import AllCourses from '../../components/AllCourses'
import UploadCourse from '../../components/UploadCourse'


const Dashboard = () => {
	const response = () => {
		console.log('ddd');
    };
    
    const [toggle, setToggle] = useState(false)
    const handleToggle = ()=>{
        setToggle(!toggle)
    }
	return (
		<HashRouter>
        <div className="background-dark">
			<aside class={toggle? "side-nav nav-collapse" : "side-nav"} id="show-side-navigation1">
				<i class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg" data-close="show-side-navigation1"  onClick={handleToggle}/>
				<div class="heading">
					<img
						src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
						alt=""
					/>
					<div class="info">
						<h3>
							<a href="#">Mostafa Omar</a>
						</h3>
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>

				<ul class="categories">
					<li>
						<i class="fa fa-home fa-fw" />
						{/* <a href="#">Dash Board</a> */}
                        <NavLink to="/">Dashboard</NavLink>
					</li>
					<li>
						{/* <i class="fa fa-envelope-open-o fa-fw" /> */}
						{/* <a href="#">
							{' '}
							My Courses <span class="num dang">56</span>
						</a> */}
                        <i class="fab fa-leanpub"></i>
                        <NavLink to="/courses">My Courses <span class="num dang">56</span></NavLink>
					</li>
					<li>
						{/* <i class="fa fa-envelope-open-o fa-fw" /> */}
                        <i class="fab fa-leanpub"></i>
						
                            <NavLink to="/all_courses">All Courses <span class="num dang">56</span></NavLink>
						
					</li>
					<li>
						<i class="fa fa-users fa-fw" />
						{/* <a href="#">Instructors</a> */}
                        <NavLink to="/instructors">Instructors</NavLink>
					</li>
					<li>
                    <i class="fas fa-upload"></i>
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
                <Route exact path="/" component={DashboardHome} />
				<Route path="/courses" component={MyCourses}/>
                <Route path="/all_courses" component={AllCourses}/>
				<Route path="/course" />
				<Route path="/instructors" component={Instructors}/>
				<Route path="/upload" component={UploadCourse}/>
				<Route path="/profile" />		
			</section>
            </div>
		</HashRouter>
	);
};

export default Dashboard;
