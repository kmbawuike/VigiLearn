import React, { Component, Fragment } from 'react';
import './styles.css';
import LoginForm from '../../components/Login';
import SignupForm from '../../components/SignUp';
import { GoogleLogin } from 'react-google-login';
import { useState } from 'react';

const AuthScreen = () => {
	const [ isLogin, setIsLogin ] = useState(true);
	const toggleLogin = () => {
		setIsLogin(!isLogin);
	};
	const response = () => {
		console.log('Hello');
	};

	const formDisplay = isLogin ? <LoginForm /> : <SignupForm />;
	const googleText = isLogin ? 'or Login using :' : 'or Signup using :';
	const member = isLogin ? 'Member? Sign Up' : 'Member? Log In';
	return (
		<Fragment>
			<div className="w3layouts-main">
				<div className="bg-layer">
					{/* <img src={Logo} alt=""/> */}
					<div className="header-main top-name">
						<div className="main-icon">
							<span className="fa fa-eercast" />
						</div>
						<div className="header-left-bottom">
							<form>
								{formDisplay}
								<div className="links">
									<p className="right" onClick={toggleLogin}>
										<a href="#" target="_parent">
											{member}
										</a>
									</p>
									<div className="clear" />
								</div>
							</form>
						</div>

						<div className="social">
							<ul>
								<li>{googleText}</li>
								<li>
									{/* <a href="#" className="google">
											<span className="fa fa-google-plus" />
										</a> */}
								
									<GoogleLogin
										clientId="1075538025016-7ksrd2999e7c8djbf2t1ndk6f4a2ngod.apps.googleusercontent.com"

										buttonText="Login"
										onSuccess={response}
										onFailure={response}
									/>
								
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default AuthScreen;
