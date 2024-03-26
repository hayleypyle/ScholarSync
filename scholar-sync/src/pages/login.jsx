import React, { useState } from 'react'
import { Link } from "react-router-dom";  
import './login.css'
import Validation from '../js/LoginValidation'


export default function Login() {
        const [values, setValues] = useState({
            email: '',
            password: '',
        })

        const [errors, setErrors] = useState({})
        const inputChange =(event)=>{
            setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
        }
        const handleSubmit =(event) => {
            event.preventDefault();
            setErrors(Validation(values));
        }

    return (
        <div className="login-container">
        <h1>Login</h1>
    
        <form action="" onSubmit = {handleSubmit}>
        <div className="form-container" id="login">
            <div className="login-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={inputChange}></input>
            {errors.email && <span>{errors.email}</span>}
            </div>
            
            <div className="login-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={inputChange}></input>
            {errors.password && <span>{errors.password}</span>}
            </div>
            
            <button type="submit">Sign In</button>
            </div>
        </form>
    
        

        <p>Don't have an account?</p>
        <Link to ="/register" className="reg-button">Register</Link>
        </div>
    )
}
