import React, { Component, Fragment, useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
// import HTTPClient from '../HTTPClients';
// import { baseUrl } from '../constants/url';
import swal from 'sweetalert2';
import Request from '../util/httpRequest'
import { trackPromise } from 'react-promise-tracker';
// const httpClient = new HTTPClient();
const request = new Request();
const Login = () => {
	let history = useHistory()
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

	const usersValidate = (usersArray, email, password)=>{
		if(usersArray.some(item => item.email === email && item.password === password)){
			return true
		}else{
			return false
		}
	}

	const validate = () => {
		const { email, password } = details;
		if (!email || !password) {
			return 'All Inputs are required';
		} else if (emailValidate(email) === false) {
			return 'Input a valid email';
		}
		else if(usersValidate(users, email, password) === false){
			return "Unauthenticated User"
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
			history.push('/')
		}
	};

	const getUsers = async () => {
		const users = await request.get('https://vigilearn-server.herokuapp.com/users')
		setUsers(users)

		console.log(users)
	}


	useEffect(()=>{
		trackPromise(
			getUsers()
		)
		
		
	},[])

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
				<button className="btn" onClick={handleLogin}>
					Log In
				</button>
			</div>
		</Fragment>
	);
};

export default Login;
