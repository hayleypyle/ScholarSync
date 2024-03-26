import React from 'react'
import { Link } from "react-router-dom";  


export default function Welcome() {
    return (
        <div>
        <h1>Login</h1>
        <label>Email:</label>
        <input type="text"></input>
        <label>Password:</label>
        <input type="text"></input>
        <button>Sign In</button>

        <p>Don't have an account?</p>
        <Link to ="/register">Register</Link>
        </div>
    )
}
