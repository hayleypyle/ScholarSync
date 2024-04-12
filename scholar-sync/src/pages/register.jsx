import React, { useState, } from 'react'
import PasswordChecklist from 'react-password-checklist'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import './css/login.css'



export default function Register() {
    const [values, setValues]= useState({
        fname: '',
        lname: '',
        email: '',
        uname: '',
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState('');


    const navigate = useNavigate();

    function validatePassword(password) {
        // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
        const passwordReqs = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordReqs.test(password);
    }
    

    const handleSubmit =(event) =>{
            event.preventDefault();
            console.log(values)
            if (values.password !== values.confirmPassword) {
                setError("Passwords don't match");
                return;
            }
            if (!validatePassword(values.password)) {
                setError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character");
                return;
            }
            axios.post("http://localhost:3000/register", values)
            .then(res =>{
            
                navigate('/')
                
            })
            .catch(err => {
                console.log(err)})
            };
        
            
    

    return (
        <div className="register-container">
        <h1>Sign Up</h1>
        
        <form action="" onSubmit={handleSubmit}>
        <div className="form-container" id="register">
            <div className="form-input" id="register">
            <label>First Name</label>
            <input type="text" onChange = {e=>setValues({...values, fname: e.target.value})} required></input>
            </div>

            <div className="form-input" id="register">
            <label>Last Name</label>
            <input type="text" onChange = {e=>setValues({...values, lname: e.target.value})} required></input>
            </div>

            <div className="form-input" id="register">
            <label>Email</label>
            <input type="email" onChange = {e=>setValues({...values, email: e.target.value})} required></input>
            </div>

            <div className="form-input" id="register">
            <label>Username</label>
            <input type="text" onChange = {e=>setValues({...values, uname: e.target.value})} required></input>
            </div>

            <div className="form-input" id="register">
            <label>Password</label>
            <input type="password" onChange= {e => setValues({...values, password: e.target.value})} required></input>
    
            </div>
        
            <div className="form-input" id="register">
            <label>Confirm Password</label>
            <input type="password" onChange={ e => setValues({...values, confirmPassword: e.target.value})} required></input>
            </div>

            <button>Sign Up</button>
            <div id="tandc">
            By clicking sign up, you agree to our terms and conditions.
            </div>
        </div>
        </form>
        
        

        <p>Already have an account?</p>
        <Link to ="/" className="reg-button">Login</Link>
        </div>
    )
}
