import React from 'react'
import { Link } from "react-router-dom";  
import './login.css'


export default function Register() {
    return (
        <div className="register-container">
        <h1>Sign Up</h1>
        
        <form action="">
        <div className="form-container" id="register">
            <div className="form-input" id="register">
            <label>First Name</label>
            <input type="text"></input>
            </div>

            <div className="form-input" id="register">
            <label>Last Name</label>
            <input type="text"></input>
            </div>

            <div className="form-input" id="register">
            <label>Email</label>
            <input type="email"></input>
            </div>

            <div className="form-input" id="register">
            <label>Username</label>
            <input type="text"></input>
            </div>

            <p>Password must be between 7 to 15 characters and contain at least one number and at least one special character</p>

            <div className="form-input" id="register">
            <label>Password</label>
            <input type="password"></input>
            </div>
        
            <div className="form-input" id="register">
            <label>Confirm Password</label>
            <input type="password"></input>
            </div>

            <button>Sign Up</button>
            <div id="tandc">
            By clicking sign up, you agree to our terms and conditions and privacy statement.
            </div>
        </div>
        </form>
        
        

        <p>Already have an account?</p>
        <Link to ="/" className="reg-button">Login</Link>
        </div>
    )
}
