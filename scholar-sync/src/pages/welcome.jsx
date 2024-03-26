import React from 'react'
import { Link } from "react-router-dom";  


export default function Welcome() {
    return (
        <div>
        <h1>Login</h1>
        <label>Username:</label>
        <input type="text"></input>
        <label>Password:</label>
        <input type="text"></input>

        <p>Don't have an account?</p>
        <Link to ="/register">Register</Link>
        </div>
    )
}
