import React, { Component, Fragment } from 'react';
import './styles.css';
import LoginForm from '../../components/Login';
import SignupForm from '../../components/SignUp';
import { GoogleLogin } from 'react-google-login';

class AuthScreen extends Component {
	state = {
		isLogin: true
	};
	toggleLogin = () => {
		this.setState((prevState) => ({
			isLogin: !prevState.isLogin
		}));
	};
	response = () => {
		console.log('hhey');
	};
	render() {
		const formDisplay = this.state.isLogin ? <LoginForm /> : <SignupForm />;
		const googleText = this.state.isLogin ? 'or Login using :' : 'or Signup using :';
		const member = this.state.isLogin ? 'Member? Sign Up' : 'Member? Log In';
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
										<p className="right" onClick={this.toggleLogin}>
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
											onSuccess={this.response}
											onFailure={this.response}
											cookiePolicy={'single_host_origin'}
										/>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default AuthScreen;
