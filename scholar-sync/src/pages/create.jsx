import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../js/AuthContext'
import './css/create.css'
import LeftNav from './navbar'
import SidebarMenu from './SidebarMenu';



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

    const subcategoryUrls = {
        1: '/#/general-chat',
        2: '/#/resources',
        3: '/#/management',
        4: '/#/pedagogy',
        5: '/#/career',
        6: '/#/other',
    };


    const navigateBackToSubcategory = (subcategory_id) => {
        const subcategoryUrl = subcategoryUrls[subcategory_id];
        if (subcategoryUrl) {
            window.location.href = subcategoryUrl;
        } else {
            console.error(`Subcategory URL not found for ID ${subcategory_id}`);
        }
    };


    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(values)
        axios.post("http://localhost:3000/create", values)
            .then(res =>{
                navigateBackToSubcategory(subcategory_id)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
        <LeftNav></LeftNav>
        <div className="container-fluid d-flex flex-row p-0">
        <div className="col-lg-3">
            <SidebarMenu>
            </SidebarMenu>
        </div>
        <div className="col-lg-9">
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
            <button onClick={() => navigateBackToSubcategory(subcategory_id)}>Back</button>
            </div>
        
        </form>
        </div>
        </div>
        </div>


        </>
    )
}