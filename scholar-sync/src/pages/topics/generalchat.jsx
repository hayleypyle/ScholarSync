import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";  
import axios from 'axios'
import '../css/dashboard.css'



export default function GeneralChat() {
    const [values, setValues] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then((response) => {
                setValues(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); 

    

    return (
        <div className="question-display">
        <h2>General Chat</h2>
        <Link to="/create:id"><button>New Question</button></Link>
        
        <div className="question-container">
            {values.map((value) =>(
                <div key={value.id} className="question-wrapper">
                    <Link to={`/question/${value.id}`}>{value.title}</Link>
                    <h6>posted by {value.uname} on {value.created_at}</h6>
                </div>

            ))}

        </div>
        </div>
    )
}
