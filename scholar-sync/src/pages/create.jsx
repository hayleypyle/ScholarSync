import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../js/AuthContext'



export default function Create() {

    const {user} = useAuth();
    const uname = user

    const [values, setValues]= useState({
        title: '',
        content: '',
        subcategory_id: '1',
        uname: uname
    })


    const navigate = useNavigate();


    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(values)
        axios.post("http://localhost:3000/create", values)
            .then(res =>{
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <>
        
        <div>
        <h2>Create Question</h2>
        <form action="" onSubmit = {handleSubmit}>
            <label required>Title:</label>
            <input type="text" onChange = {e=>setValues({...values, title: e.target.value})} required></input>
            <label>Text (optional):</label>
            <input type="textarea" onChange = {e=>setValues({...values, content: e.target.value})}></input>
            <button type="submit">Post</button>
            <Link to ="/">Back to dashboard</Link>
        </form>
        </div>
        </>
    )
}
