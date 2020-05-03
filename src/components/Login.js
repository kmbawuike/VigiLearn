import React, { Component, Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert2';
import Request from '../util/httpRequest';
import { trackPromise } from 'react-promise-tracker';

const request = new Request();
const Login = () => {
	let history = useHistory();
	const [ details, setDetails ] = useState({
		email: '',
		password: ''
	});
	const [ users, setUsers ] = useState([]);
	const [ isLogin, setIsLogin ] = useState(false);

	const handleChange = (evt) => {
		const value = evt.target.value;
		setDetails({
			...details,
			[evt.target.name]: value
		});
	};

	const emailValidate = (email) => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const usersValidate = (usersArray, email, password) => {
		if (usersArray.some((item) => item.email === email && item.password === password)) {
			return true;
		} else {
			return false;
		}
	};

	const validate = () => {
		const { email, password } = details;
		if (!email || !password) {
			return 'All Inputs are required';
		} else if (emailValidate(email) === false) {
			return 'Input a valid email';
		} else if (usersValidate(users, email, password) === false) {
			return 'Unauthenticated User';
		}
	};

	const handleLogin = (e) => {
		e.preventDefault();
		const err = validate();
		if (err) {
			swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Validation Error',
				footer: err
			});
		} else {
			console.log('loggged in');
			history.push('/');
		}
	};

	const getUsers = async () => {
		const users = await request.get('https://vigilearn-server.herokuapp.com/users');
		setUsers(users);

		console.log(users);
	};

	useEffect(() => {
		trackPromise(getUsers());
	}, []);

	return (
		<Fragment>
			<div className="icon1">
				<span className="fa fa-envelope" />
				<input
					type="email"
					placeholder="Email Address"
					required=""
					name="email"
					value={details.email}
					onChange={handleChange}
				/>
			</div>
			<div className="icon1">
				<span className="fa fa-lock" />
				<input
					type="password"
					placeholder="Password"
					required=""
					name="password"
					value={details.password}
					onChange={handleChange}
				/>
			</div>
			<div className="bottom">
				{/* <GoogleLogin
					clientId="1075538025016-7ksrd2999e7c8djbf2t1ndk6f4a2ngod.apps.googleusercontent.com"
					render={(renderProps) => (
						<button onClick={renderProps.onClick}>
							Login
						</button>
					)}
					buttonText="Login"
					onSuccess={response}
					onFailure={response}
					
				/> */}

				{/* <button className="btn" onClick={handleLogin}>
					Log In
				</button> */}

				
			</div>
		</Fragment>
	);
};

// const btn = {
// 	borderRadius: '10px',
//     background: '#007cc0',
//     color: '#fff',
//     fontSize: '15px',
//     textTransform: 'uppercase',
//     padding: '0.8em 2em',
//     letterSpacing: '1px',
//     transition: 0.5s all;
//     -webkit-transition: 0.5s all;
//     -moz-transition: 0.5s all;
//     -o-transition: 0.5s all;
//     display: inline-block;
//     cursor: pointer;
//     outline: none;
//     border: none;
//     width: 100%;
// }
export default Login;
