import React, { Fragment, useState } from 'react';
import './styles.css'
import Logo from '../../assets/images/logo.png'
import {GoogleLogin} from 'react-google-login'

const Dashboard = () => {
    const response = ()=>{
        console.log('ddd')
    }
	return (
		<Fragment>
			<aside class="side-nav" id="show-side-navigation1">
				<i class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg" data-close="show-side-navigation1" />
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
						<a href="#">Dash Board</a>

					</li>
                    <li>
						<i class="fa fa-envelope-open-o fa-fw" />
						<a href="#">
							{' '}
							My Courses <span class="num dang">56</span>
						</a>
					</li>
                    <li>
						<i class="fa fa-envelope-open-o fa-fw" />
						<a href="#">
							{' '}
							All Courses <span class="num dang">56</span>
						</a>
					</li>
					<li>
						<i class="fa fa-users fa-fw" />
						<a href="#">Instructors</a>
					</li>
					<li>
						<i class="fa fa-envelope-open-o fa-fw" />
						<a href="#">

							Upload Course 
						</a>
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
                                
                                <span className="fa fa-eercast main-icon"/>
                
							</a>
						</div>
						<div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
							<ul class="nav navbar-nav">
								<li>
									<a href="#">
                                    <i class="fas fa-user"></i>
										
									</a>
								</li>

                                <li>
									<a href="#">
                                    <i class="fas fa-sign-out-alt"></i> 
										
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
				<div class="welcome">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-12">
								<div class="content">
									<h2>Welcome to Dashboard</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section class="statistics">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-4">
								<div class="box">
									<i class="fa fa-envelope fa-fw bg-primary" />
									<div class="info">
										<h3>1,245</h3> <span>Emails</span>
										<p>Lorem ipsum dolor sit amet</p>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="box">
									<i class="fa fa-file fa-fw danger" />
									<div class="info">
										<h3>34</h3> <span>Projects</span>
										<p>Lorem ipsum dolor sit amet</p>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="box">
									<i class="fa fa-users fa-fw success" />
									<div class="info">
										<h3>5,245</h3> <span>Users</span>
										<p>Lorem ipsum dolor sit amet</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="charts">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-6">
								<div class="chart-container">
									<h3>Chart</h3>
									<canvas id="myChart" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="chart-container">
									<h3>Chart2</h3>
									<canvas id="myChart2" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="admins">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-6">
								<div class="box">
									<h3>Admins:</h3>
									<div class="admin">
										<div class="img">
											<img
												class="img-responsive"
												src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148906966/small/1501685402/enhance"
												alt="admin"
											/>
										</div>
										<div class="info">
											<h3>Joge Lucky</h3>
											<p>Lorem ipsum dolor sit amet.</p>
										</div>
									</div>
									<div class="admin">
										<div class="img">
											<img
												class="img-responsive"
												src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907137/small/1501685404/enhance"
												alt="admin"
											/>
										</div>
										<div class="info">
											<h3>Joge Lucky</h3>
											<p>Lorem ipsum dolor sit amet.</p>
										</div>
									</div>
									<div class="admin">
										<div class="img">
											<img
												class="img-responsive"
												src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907019/small/1501685403/enhance"
												alt="admin"
											/>
										</div>
										<div class="info">
											<h3>Joge Lucky</h3>
											<p>Lorem ipsum dolor sit amet.</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="box">
									<h3>Moderators:</h3>
									<div class="admin">
										<div class="img">
											<img
												class="img-responsive"
												src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907114/small/1501685404/enhance"
												alt="admin"
											/>
										</div>
										<div class="info">
											<h3>Joge Lucky</h3>
											<p>Lorem ipsum dolor sit amet.</p>
										</div>
									</div>
									<div class="admin">
										<div class="img">
											<img
												class="img-responsive"
												src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907086/small/1501685404/enhance"
												alt="admin"
											/>
										</div>
										<div class="info">
											<h3>Joge Lucky</h3>
											<p>Lorem ipsum dolor sit amet.</p>
										</div>
									</div>
									<div class="admin">
										<div class="img">
											<img
												class="img-responsive"
												src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
												alt="admin"
											/>
										</div>
										<div class="info">
											<h3>Joge Lucky</h3>
											<p>Lorem ipsum dolor sit amet.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="statis text-center">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-3">
								<div class="box bg-primary">
									<i class="fa fa-eye" />
									<h3>5,154</h3>
									<p class="lead">Page views</p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="box danger">
									<i class="fa fa-user-o" />
									<h3>245</h3>
									<p class="lead">User registered</p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="box warning">
									<i class="fa fa-shopping-cart" />
									<h3>5,154</h3>
									<p class="lead">Product sales</p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="box success">
									<i class="fa fa-handshake-o" />
									<h3>5,154</h3>
									<p class="lead">Transactions</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="chrt3">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-9">
								<div class="chart-container">
									<canvas id="chart3" width="100%" />
								</div>
							</div>
							<div class="col-md-4">
								<div class="box" />
							</div>
						</div>
					</div>
                    <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={response}
    onFailure={response}
    cookiePolicy={'single_host_origin'}
  />,
				</section>
			</section>
		</Fragment>
	);
};

export default Dashboard