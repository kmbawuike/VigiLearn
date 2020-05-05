import React, { useState, Fragment } from 'react';
// import HTTPClient from '../HTTPClients';
// import {baseUrl} from '../constants/url'
import swal from 'sweetalert2';
import Request from '../util/httpRequest'
import {url} from '../util/baseUrl'
import {useHistory} from 'react-router-dom'

const request = new Request()

const SignUp = ()=>{
    const history = useHistory()
   const  [state, setState] = useState({
        firstName: '',
		lastName: '',
		email: '',
		designation: 'sign',
		password: ''
    })

    const handleChange = (evt)=>{
        const value = evt.target.value
        setState({
            ...state, 
            [evt.target.name] : value
        })
    }

   const emailValidate = (email) => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const formValidation = () => {
		const { firstName, lastName, email, designation, password } = state;
		if (!firstName || !lastName || !email || !password) {
			return 'All Fields are required';
		} else if (emailValidate(email) === false) {
			return 'Please use a valid email';
		} else if (designation === 'sign') {
			return 'Please select your desired designation';
		}
    };
    

    const handleSubmit = (e)=>{
        e.preventDefault();
		const err = formValidation();
		if (err) {
			swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Validation Error',
				footer: err
			});
		} else {
			request.post(`${url}users`, {
				firstName: state.firstName,
				lastName: state.lastName,
				email: state.email,
				designation: state.designation,
				password: state.password
            });
            history.push('/dashboard')
		}
    }

    return (
        <Fragment>
            <div className="icon1 ">
                <span className="fa fa-user" />
                <input
                    type="text"
                    placeholder="First Name"
                    required
                    name="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                />
            </div>
            <div className="icon1 ">
                <span className="fa fa-user" />
                <input
                    type="text"
                    placeholder="Last Name"
                    required
                    name="lastName"
                    value={state.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className="icon1">
                <span className="fa fa-envelope" />
                <input
                    type="email"
                    placeholder="Email Address"
                    required
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
            </div>
            <div className="icon1">
                <select value={state.designation} onChange={handleChange} name="designation">
                    <option value="sign">Sign Up As...</option>
                    <option value="instructor">Instructor</option>
                    <option value="student">Student</option>
                </select>
            </div>
            <div className="icon1">
                <span className="fa fa-lock" />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                />
            </div>
            <div className="bottom">
                <button className="btn" onClick={handleSubmit}>
                    SIGN UP
                </button>
            </div>
        </Fragment>
    )
}

export default SignUp;
