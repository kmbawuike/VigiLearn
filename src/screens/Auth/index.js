import React, { Component, Fragment, useState } from 'react';
import './styles.css';
import LoginForm from '../../components/Login';
import SignupForm from '../../components/SignUp';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

const AuthScreen = () => {
	const history = useHistory()
	const [ isLogin, setIsLogin ] = useState(true);
	const toggleLogin = () => {
		setIsLogin(!isLogin);
	};
	const successResponse = (response) => {
		console.log('success', response);
		console.log(Array.isArray(response))
		console.log(response.Pt)
		history.push('/dashboard');

	};

	const failureResponse = (response) =>{
		console.log('failure', response)
	}

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
										clientId="8087564068-ms4g43sj52oqjeqdvvm68ev2oev7fpoo.apps.googleusercontent.com"
										buttonText="Login"
										onSuccess={successResponse}
										onFailure={failureResponse}
										
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
