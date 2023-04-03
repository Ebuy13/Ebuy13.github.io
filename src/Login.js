import React, { useState } from "react";

import logo from './images/logo .png'; // Tell webpack this JS file uses this image
console.log(logo); // /logo.84287d09.png

function Header() {
	// Import result is the URL of yur image
	return <img src={logo} alt="Logo" />;
}

export default Header;
export const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const signUpData = { email, password }
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(signUpData),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const json = await response.json()
		console.log(json)
        if (!response.ok) {
            alert(json.message)
            setError(json.error)
        }
        if (response.ok){
            setError(null)
			window.alert('The login was successful')
            console.log('user login success')
        }
	}
	return (
		<div className="auth-form-container">
			<label1 for="Ebuy">Ebuy🛍️🛒</label1>
			<form className="Login-form" onSubmit={handleSubmit}>
				<label for="email">Email/Phone</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your username" id="email" name="email" />
				<label for="password">Password</label>
				<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="email" name="email" />
				<button type="submit">Sign In</button>
			</form>
			<button className="link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account ?
				Register here</button>

		</div>
	)


}