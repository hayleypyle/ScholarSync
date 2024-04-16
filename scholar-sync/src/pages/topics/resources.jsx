import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";  
import axios from 'axios'
import '../css/question.css'
import LeftNav from '../navbar'
import SidebarMenu from '../SidebarMenu'


export default function Resources() {
    const [values, setValues] = useState([]);
    const subcategory_id = '2';


    useEffect(() => {
        axios.get(`http://localhost:3000/?subcategory_id=${subcategory_id}`)
            .then((response) => {
                setValues(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); 

    

    return (
        <>
        <LeftNav></LeftNav>
        <div className="container-fluid d-flex flex-row p-0">
            <div className="col-lg-3">
                <SidebarMenu>
                </SidebarMenu>
            </div>

            <div className="col-lg-9">
        <div className="question-display">
        <h2>Resources</h2>
        <Link to="/create/2"><button className="question-btn">New Question</button></Link>
        
        <div className="question-container">
            {values.map((value) =>(
                <div key={value.id} className="question-wrapper">
                    <Link className="link" to={`/question/${value.id}`}>{value.title}</Link>
                    <h6>posted by {value.uname} on {value.created_at}</h6>
                </div>

            ))}

        </div>
        </div>
        </div>
        </div>
        </>
    )
    }
