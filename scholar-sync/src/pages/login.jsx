import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";  
import './css/login.css'
import axios from 'axios'
import { useAuth } from '../js/AuthContext'
import image from '../images/image1.jpg'




export default function Login() {


    const { login } = useAuth();
    const [values, setValues]= useState({
        uname: '',
        password: ''
    });
    const [error, setError] = useState('')


    const navigate = useNavigate();

    const handleSubmit =(event) =>{
        event.preventDefault();
            
            axios.post("http://localhost:3000/login", values)
                .then(res =>{
                if(res.data.success){
                    login(values.uname)
                    navigate('/')
                } else {
                    setError('Login invalid. Please check username and password')
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 401 || err.response && err.response.status === 400) {
                    setError('Login invalid. Please check username and password')
                } else {
                    setError('An error occurred. Please try again later.')
                }
            })          
            
    }

    useEffect(() =>{
        const loggedInUser = localStorage.getItem('user')
        if(loggedInUser){
            navigate('/');
        }
    }, [navigate]);
    
    return (
        <>
        <div className="container-fluid d-flex flex-row p-0">
        <div className="col-lg-4">
        <div className="login-container">
        <h1>ScholarSync</h1>
    
    
        <form action="" onSubmit={handleSubmit}>
        <div className="login-form-container" id="login">
            <h3>Login</h3>
            <div className="login-input">
            <label htmlFor="uname">Username</label>
            <input type="text" name="uname" value = {values.uname} onChange = {e=>setValues({...values, uname: e.target.value})} required ></input>
            </div>
            
            <div className="login-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value = {values.password} onChange= {e => setValues({...values, password: e.target.value})} required></input>
            </div>
            {error && <div className="error">{error}</div>}
            <button className="signin-btn" type="submit">Sign In</button>
            </div>
        </form>
    
        
        <div className="no-account">
        <p>Don't have an account?</p>
        <Link to ="/register" className="reg-button">Register</Link>
        </div>
        </div>
        </div>

        <div className="col-lg-8 p-0">
            <div className="backimg">
                <div className="quote">
                    <h3>"Teaching kids to count is fine, but teaching kids what counts is best."</h3>
                    <h4>-Bob Talbert</h4>

                </div>
            </div>
        </div>
        </div>
        </>
    )
}
