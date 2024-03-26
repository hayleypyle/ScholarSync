import React from 'react'
import { Link } from "react-router-dom";  
import './login.css'


export default function Register() {
    return (
        <div className="register-container">
        <h1>Sign Up</h1>
        
        <form action="">
        <div className="form-container">
            <div className="form-input">
            <label>First Name:</label>
            <input type="text"></input>
            </div>

            <div className="form-input">
            <label>Last Name:</label>
            <input type="text"></input>
            </div>

            <div className="form-input">
            <label>Email:</label>
            <input type="email"></input>
            </div>

            <div className="form-input">
            <label>Username:</label>
            <input type="text"></input>
            </div>

            <div className="form-input">
            <label>Password:</label>
            <input type="password"></input>
            </div>
        
            <div className="form-input">
            <label>Confirm Password:</label>
            <input type="password"></input>
            </div>

            <button>Sign Up</button>
            <p>By clicking sign up, you agree to our terms and conditions and privacy statement. </p>
        </div>
        </form>
        
        

        <p>Already have an account?</p>
        <Link to ="/">Login</Link>
        </div>
    )
}
