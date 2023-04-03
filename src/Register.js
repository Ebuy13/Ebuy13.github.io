/**
 * It takes a function as an argument and returns a new function that can only be executed once.
 * @param props - This is the props object that is passed to the component.
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useState, useEffect } from "react";

//components


export const Register = (props) => {
    const [username, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Cpassword, setCPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState(null);
    const [register, setRegister] = useState(null);
    const handleSubmit = async (e) => {
        // prevent refresh
        e.preventDefault();
        if (password == Cpassword){
            const userID = Math.floor(Math.random() * 90000) + 10000;
            const userData = {userID,email,username,password,address,phone}
            const response = await fetch('/api/signUp',{
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
            if (!response.ok) {
                alert('The login was not successful')
                setError(json.error)
            }
            if (response.ok){
                setError(null)
                alert('The login was successful')
                console.log('user data added')
            }
            console.log(email);
        }
        else {
            window.alert('The 2 passwords do not match, try again')
        }

    }
    useEffect(() => {
        const fetchRegisterData = async () => {
            const response = await fetch('/api/signUp')
            const json = await response.json()
            if (response.ok) {
                setRegister(json)
            }
        }
        fetchRegisterData()
    }, [])
    return (
        <div className="auth-form-container">
            <label1 for="Ebuy">Ebuy🛍️🛒</label1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlfor="name">Name</label>
                <input value={username} onChange={(e) => setuserName(e.target.value)} type="name" placeholder="Your name" id="name" name="name" />
                <label htmlfor="Phone">Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Your Contact number" id="Phone" name="Phone" />
                <label htmlfor="Address">Address</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} type="String" placeholder="Your Residential Adress" id="Address" name="Address" />
                <label htmlfor="Email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your emailid" id="email" name="email" />
                <label htmlfor="Password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
                <label htmlfor="Cpassword">Confirm Password</label>
                <input value={Cpassword} onChange={(e) => setCPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
                <button type="submit">Sign Up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account sign in</button>
        </div>
    )
}