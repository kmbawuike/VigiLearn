import React, {Fragment, useState} from 'react'
import About from '../../assets/images/about.png'
import Course01 from '../../assets/images/course01.jpg'
import CTA from '../../assets/images/cta1-background.jpg'
import Background from '../../assets/images/home-background.jpg'
import Logo_Alt from '../../assets/images/logo-alt.png'
import Logo from '../../assets/images/logo.png'
import './styles.css'

const Home = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    return(
        <Fragment>
		{/* <!-- Header --> */}
		<header id="header" class={toggle? "transparent-nav nav-collapse" : "transparent-nav"}>
			<div class="container">

				<div class="navbar-header">
					{/* <!-- Logo --> */}
					<div class="navbar-brand">
						<a class="logo" href="index.html">
							<img src={Logo_Alt} alt="logo" />
						</a>
					</div>
					{/* <!-- /Logo -->

					<!-- Mobile toggle --> */}
					<button class="navbar-toggle" onClick={handleToggle}>
						<span></span>
					</button>
					{/* <!-- /Mobile toggle --> */}
				</div>

				{/* <!-- Navigation --> */}
				<nav id="nav">
					<ul class="main-menu nav navbar-nav navbar-right">
						<li><a href="index.html">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Courses</a></li>
						<li><a href="blog.html">Blog</a></li>
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</nav>
				{/* <!-- /Navigation --> */}

			</div>
		</header>
		{/* <!-- /Header -->

		<!-- Home --> */}
		<div id="home" class="hero-area">

			{/* <!-- Backgound Image --> */}
			<div class="bg-image bg-parallax overlay" style={{backgroundImage: `url(${Background})`}}></div>
			{/* <!-- /Backgound Image --> */}

			<div class="home-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<h1 class="white-text">Edusite Free Online Training Courses</h1>
							<p class="lead white-text">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant, eu pro alii error homero.</p>
							<a class="main-button icon-button" href="#">Get Started!</a>
						</div>
					</div>
				</div>
			</div>

		</div>
		{/* <!-- /Home -->

		<!-- About --> */}
		<div id="about" class="section">

			{/* <!-- container --> */}
			<div class="container">

				{/* <!-- row --> */}
				<div class="row">

					<div class="col-md-6">
						<div class="section-header">
							<h2>Welcome to Edusite</h2>
							<p class="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
						</div>

						{/* <!-- feature --> */}
						<div class="feature">
							<i class="feature-icon fa fa-flask"></i>
							<div class="feature-content">
								<h4>Online Courses </h4>
								<p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
							</div>
						</div>
						{/* <!-- /feature -->

						<!-- feature --> */}
						<div class="feature">
							<i class="feature-icon fa fa-users"></i>
							<div class="feature-content">
								<h4>Expert Teachers</h4>
								<p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
							</div>
						</div>
						{/* <!-- /feature -->

						<!-- feature --> */}
						<div class="feature">
							<i class="feature-icon fa fa-comments"></i>
							<div class="feature-content">
								<h4>Community</h4>
								<p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
							</div>
						</div>
						{/* <!-- /feature --> */}

					</div>

					<div class="col-md-6">
						<div class="about-img">
							<img src={About} alt="" />
						</div>
					</div>

				</div>
				{/* <!-- row --> */}

			</div>
			{/* <!-- container --> */}
		</div>
		{/* <!-- /About -->

		<!-- Courses --> */}
		<div id="courses" class="section">

			{/* <!-- container --> */}
			<div class="container">

				{/* <!-- row --> */}
				<div class="row">
					<div class="section-header text-center">
						<h2>Explore Courses</h2>
						<p class="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
					</div>
				</div>
				{/* <!-- /row -->

				<!-- courses --> */}
				<div id="courses-wrapper">

					{/* <!-- row --> */}
					<div class="row">

						{/* <!-- single course --> */}
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src={Course01} alt="" />
									<i class="course-link-icon fa fa-link"></i>
								</a>
								<a class="course-title" href="#">Beginner to Pro in Excel: Financial Modeling and Valuation</a>
								<div class="course-details">
									<span class="course-category">Business</span>
									<span class="course-price course-free">Free</span>
								</div>
							</div>
						</div>
						{/* <!-- /single course -->

						<!-- single course --> */}
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src={Course01} alt="" />
									<i class="course-link-icon fa fa-link"></i>
								</a>
								<a class="course-title" href="#">Introduction to CSS </a>
								<div class="course-details">
									<span class="course-category">Web Design</span>
									<span class="course-price course-premium">Premium</span>
								</div>
							</div>
						</div>
						{/* <!-- /single course -->

						<!-- single course --> */}
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src={Course01} alt="" />
									<i class="course-link-icon fa fa-link"></i>
								</a>
								<a class="course-title" href="#">The Ultimate Drawing Course | From Beginner To Advanced</a>
								<div class="course-details">
									<span class="course-category">Drawing</span>
									<span class="course-price course-premium">Premium</span>
								</div>
							</div>
						</div>
						{/* <!-- /single course --> */}

						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="course">
								<a href="#" class="course-img">
									<img src={Course01} alt="" />
									<i class="course-link-icon fa fa-link"></i>
								</a>
								<a class="course-title" href="#">The Complete Web Development Course</a>
								<div class="course-details">
									<span class="course-category">Web Development</span>
									<span class="course-price course-free">Free</span>
								</div>
							</div>
						</div>
						{/* <!-- /single course --> */}

					</div>
					{/* <!-- /row -->

					<!-- row --> */}
					

				</div>
				

				<div class="row">
					<div class="center-btn">
						<a class="main-button icon-button" href="#">More Courses</a>
					</div>
				</div>

			</div>
			{/* <!-- container --> */}

		</div>
		{/* <!-- /Courses --> */}

		{/* <!-- Call To Action --> */}
		<div id="cta" class="section">

			{/* <!-- Backgound Image --> */}
			<div class="bg-image bg-parallax overlay" style={{backgroundImage: `url(${Background})`}}></div>
			{/* <!-- /Backgound Image --> */}
{/* 
			<!-- container --> */}
			<div class="container">

				{/* <!-- row --> */}
				<div class="row">

					<div class="col-md-6">
						<h2 class="white-text">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis.</h2>
						<p class="lead white-text">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
						<a class="main-button icon-button" href="#">Get Started!</a>
					</div>

				</div>
				{/* <!-- /row --> */}

			</div>
			{/* <!-- /container --> */}

		</div>
		{/* <!-- /Call To Action -->

		<!-- Why us --> */}
		<div id="why-us" class="section">

			{/* <!-- container --> */}
			<div class="container">

				{/* <!-- row --> */}
				<div class="row">
					<div class="section-header text-center">
						<h2>Why Edusite</h2>
						<p class="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
					</div>
{/* 
					<!-- feature --> */}
					<div class="col-md-4">
						<div class="feature">
							<i class="feature-icon fa fa-flask"></i>
							<div class="feature-content">
								<h4>Online Courses</h4>
								<p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
							</div>
						</div>
					</div>
					{/* <!-- /feature -->

					<!-- feature --> */}
					<div class="col-md-4">
						<div class="feature">
							<i class="feature-icon fa fa-users"></i>
							<div class="feature-content">
								<h4>Expert Teachers</h4>
								<p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
							</div>
						</div>
					</div>
					{/* <!-- /feature -->

					<!-- feature --> */}
					<div class="col-md-4">
						<div class="feature">
							<i class="feature-icon fa fa-comments"></i>
							<div class="feature-content">
								<h4>Community</h4>
								<p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
							</div>
						</div>
					</div>
					{/* <!-- /feature --> */}

				</div>
				{/* <!-- /row --> */}

				<hr class="section-hr" />

				{/* <!-- row --> */}
				<div class="row">

					<div class="col-md-6">
						<h3>Persius imperdiet incorrupte et qui, munere nusquam et nec.</h3>
						<p class="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
						<p>No vel facete sententiae, quodsi dolores no quo, pri ex tamquam interesset necessitatibus. Te denique cotidieque delicatissimi sed. Eu doming epicurei duo. Sit ea perfecto deseruisse theophrastus. At sed malis hendrerit, elitr deseruisse in sit, sit ei facilisi mediocrem.</p>
					</div>

					<div class="col-md-5 col-md-offset-1">
						<a class="about-video" href="#">
							<img src={About} alt="" />
							<i class="play-icon fa fa-play"></i>
						</a>
					</div>

				</div>
				{/* <!-- /row --> */}

			</div>
			{/* <!-- /container --> */}

		</div>
		{/* <!-- /Why us -->

		<!-- Contact CTA --> */}
		<div id="contact-cta" class="section">

			{/* <!-- Backgound Image --> */}
			<div class="bg-image bg-parallax overlay" style={{backgroundImage: `url(${CTA})`}}></div>
			{/* <!-- Backgound Image --> */}

			{/* <!-- container --> */}
			<div class="container">

				{/* !-- row -->< */}
				<div class="row">

					<div class="col-md-8 col-md-offset-2 text-center">
						<h2 class="white-text">Contact Us</h2>
						<p class="lead white-text">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
						<a class="main-button icon-button" href="#">Contact Us Now</a>
					</div>

				</div>
				{/* <!-- /row --> */}

			</div>
			{/* <!-- /container --> */}

		</div>
		{/* <!-- /Contact CTA -->

		<!-- Footer --> */}
		<footer id="footer" class="section">

			{/* <!-- container --> */}
			<div class="container">

				{/* <!-- row --> */}
				<div class="row">

					{/* <!-- footer logo --> */}
					<div class="col-md-6">
						<div class="footer-logo">
							<a class="logo" href="index.html">
								<img src={Logo} alt="logo" />
							</a>
						</div>
					</div>
					{/* <!-- footer logo -->

					<!-- footer nav --> */}
					<div class="col-md-6">
						<ul class="footer-nav">
							<li><a href="index.html">Home</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Courses</a></li>
							<li><a href="blog.html">Blog</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>
					{/* <!-- /footer nav --> */}

				</div>
				{/* <!-- /row -->

				<!-- row --> */}
				<div id="bottom-footer" class="row">

					{/* <!-- social --> */}
					<div class="col-md-4 col-md-push-8">
						<ul class="footer-social">
							<li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a></li>
							<li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
							<li><a href="#" class="youtube"><i class="fa fa-youtube"></i></a></li>
							<li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
					{/* <!-- /social -->

					<!-- copyright --> */}
					<div class="col-md-8 col-md-pull-4">
						<div class="footer-copyright">
							<span>&copy; Copyright 2018. All Rights Reserved. | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a></span>
						</div>
					</div>
					{/* <!-- /copyright --> */}

				</div>
				{/* <!-- row --> */}

			</div>
			{/* <!-- /container --> */}

		</footer>
		{/* <!-- /Footer --> */}
        </Fragment>
    )
}

export default Home