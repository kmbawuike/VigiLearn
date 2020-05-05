import React, {Fragment, useState} from 'react'
import About from '../../assets/images/about.png'
import Course01 from '../../assets/images/course01.jpg'
import CTA from '../../assets/images/cta1-background.jpg'
import Background from '../../assets/images/home-background.jpg'
import Logo_Alt from '../../assets/images/logo-alt.png'
import Logo from '../../assets/images/logo.png'
import './styles.css'
import {Link} from 'react-router-dom'

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
						<span className="fa fa-eercast main-icon" style={{color: 'white'}}/>
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
						<li><Link to="/auth">Sign in</Link></li>
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
							<h1 class="white-text">VigiLearn Free Online Training</h1>
							<p class="lead white-text">Becaome an expert in 6 months.</p>
							<Link to="/auth" className="main-button icon-button">Get Started!</Link>
						</div>
					</div>
				</div>
			</div>

		</div>
	

	
        </Fragment>
    )
}

export default Home