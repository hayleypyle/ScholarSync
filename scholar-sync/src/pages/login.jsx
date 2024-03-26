import React from 'react'
import { Link } from "react-router-dom";  
import './login.css'


export default function Login() {
    return (
        <div className="login-container">
        <h1>Login</h1>
       
        <form action="">
        <div className="form-container">
            <div className="login-input">
            <label htmlFor="email">Email:</label>
            <input type="email"></input>
            </div>
            
            <div className="login-input">
            <label htmlFor="password">Password:</label>
            <input type="password"></input>
            </div>
            
            <button>Sign In</button>
            </div>
        </form>
       
        

        <p>Don't have an account?</p>
        <Link to ="/register">Register</Link>
        </div>
    )
}
