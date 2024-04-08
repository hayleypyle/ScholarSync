import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../js/AuthContext'
import './css/create.css'



export default function Create() {

    const {user} = useAuth();
    const uname = user;
    const {id} = useParams();
    const subcategory_id = parseInt(id);

    const [values, setValues]= useState({
        title: '',
        content: '',
        subcategory_id: subcategory_id,
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
        
        <div className="create-container">
        
        <form action="" onSubmit = {handleSubmit}>
            <div className="create-question">
            <h2>Create Question</h2>
                <div>
                <label>Title:</label>
                <input type="text" className="title" onChange = {e=>setValues({...values, title: e.target.value})} required></input>
                </div>
            
                <div>
                <label>Text:</label>
                <input type="textarea" className="textarea" onChange = {e=>setValues({...values, content: e.target.value})}></input>
                </div>
            </div>

            <div className="end-container">
            <button type="submit">Post</button>
            <Link to ="/">Back to dashboard</Link></div>
        
        </form>
        </div>
        </>
    )
}