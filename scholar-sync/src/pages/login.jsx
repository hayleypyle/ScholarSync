import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";  
import './login.css'
import axios from 'axios'




export default function Login() {

    const navigate = useNavigate();

    const handleSubmit =(event) =>{
            event.preventDefault();
            console.log(values)
            axios.post("http://localhost:3000/login", values)
            .then(res =>{
                navigate('/dashboard')
            })
            .catch(err => console.log(err))
            
            
    }
    
    return (
        <div className="login-container">
        <h1>Login</h1>
    
        <form action="" onSubmit={handleSubmit}>
        <div className="form-container" id="login">
            <div className="login-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" ></input>
            
            </div>
            
            <div className="login-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" ></input>
            </div>
            
            <button type="submit">Sign In</button>
            </div>
        </form>
    
        

        <p>Don't have an account?</p>
        <Link to ="/register" className="reg-button">Register</Link>
        </div>
    )
}
