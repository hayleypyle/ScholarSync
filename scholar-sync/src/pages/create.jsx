import React from 'react'
import {useState} from 'react'
import { useParams } from "react-router-dom";
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

    const [error, setError] = useState('');


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
        if (values.title === ' '){
            setError("Must have a title.");
            return

        }
        if (!values.title.endsWith('?')){
            setError("Title must be a question ending with a question mark.");
            return

        }
        axios.post("http://localhost:3000/create", values)
            .then(res =>{
                navigateBackToSubcategory(subcategory_id)
            })
            .catch(err => 
                {
                    if (err.response && err.response.data){
                        setError(err.response.data.error);
                    } else{
                        setError("Error submitting answer", error)
                    }
                })
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
            <h5>Create Question</h5>
                <div>
                <label>Question Title:</label>
                <div className="create-input">
                <input type="text" className="title" onChange = {e=>setValues({...values, title: e.target.value})} required></input>
                </div>
                </div>
                {error && <div className="error">{error}</div>}

            
                <div>
                <label>Question Description:</label>
                <div className="create-input">
                <textarea className="textarea" onChange = {e=>setValues({...values, content: e.target.value})}></textarea>
                </div>
                </div>
                <div className="end-container">
                <button className="post-btn" type="submit">Post</button>
                <button className="back-btn" onClick={() => navigateBackToSubcategory(subcategory_id)}>Back</button>
                </div>
            </div>

            
        
        </form>
        </div>
        </div>
        </div>


        </>
    )
}