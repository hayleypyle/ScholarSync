import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";  
import './login.css'
import axios from 'axios'




export default function Login() {

    const [values, setValues]= useState({
        uname: '',
        password: ''
    })

    const [user, setUser]= useState()

    const navigate = useNavigate();

    const handleSubmit =(event) =>{
            event.preventDefault();
            
            console.log(values)
            axios.post("http://localhost:3000/login", values)
            .then(res =>{
                console.log("login response:", res.data)
                if(res.data === "success"){
                    console.log("login successful")
                    setUser(res.data)
                    localStorage.setItem('user', values.uname)
                    console.log(res.data)
                    navigate('/dashboard')
                } else {
                    console.log('login failed')
                    alert("Login information is incorrect")
                }
            })
            .catch(err => {
                console.error("error during login", err)})
            
            
    }

    useEffect(() =>{
        const loggedInUser = localStorage.getItem('user')
        if(loggedInUser){
            const foundUser = JSON.parse(loggedInUser)
            setUser(foundUser)
        }
    }, []);

    // if (user){
    //     return <div>{uname} is logged in</div>
    // }
    
    return (
        <div className="login-container">
        <h1>Login</h1>
    
        <form action="" onSubmit={handleSubmit}>
        <div className="form-container" id="login">
            <div className="login-input">
            <label htmlFor="uname">Username</label>
            <input type="text" name="uname"  onChange = {e=>setValues({...values, uname: e.target.value})} required ></input>
            
            </div>
            
            <div className="login-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange= {e => setValues({...values, password: e.target.value})} required></input>
            </div>
            
            <button type="submit">Sign In</button>
            </div>
        </form>
    
        

        <p>Don't have an account?</p>
        <Link to ="/register" className="reg-button">Register</Link>
        </div>
    )
}
