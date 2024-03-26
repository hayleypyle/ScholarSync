import React from 'react'

export default function Register() {
    return (
        <div>
        <h1>Sign Up</h1>
        <li><label>First Name:</label>
        <input type="text"></input></li>
        <li><label>Last Name:</label>
        <input type="text"></input></li>
        <li><label>Email:</label>
        <input type="email"></input></li>
        <li><label>Username:</label>
        <input type="text"></input></li>
        <li><label>Password:</label>
        <input type="text"></input></li>
        <li><label>Confirm Password:</label>
        <input type="text"></input></li>

        <button>Submit</button>
        </div>
    )
}
