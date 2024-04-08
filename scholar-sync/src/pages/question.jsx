import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";  
import axios from 'axios'
import './question.css'

export default function Question() {
    const {id} = useParams();
    console.log(id)
    const [values, setValues] = useState([]);
    

    useEffect(() => {
        axios.get(`http://localhost:3000/question/${id}`)
            .then((response) => {
                console.log(response.data);
                if(response.data.length>0){
                    setValues(response.data[0]);
                } else {

                }
                
                
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id]); 


    return (
        <>
        <div className="question-detail">
        <h2>General Chat</h2>
        <div className="question-title">
            <h4>{values.title}</h4>
        </div>
        <div className="question-content">
            <p>{values.content}</p>
        </div>
        <div className="question-stamp">
            <p>posted by {values.uname} on {values.created_at}.</p>
        </div>
    
        
        <div className="answer-container">
        <p>user on date:</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti corporis corrupti voluptas quas excepturi? Illo non similique exercitationem in natus.</p>
        
        </div>
        
        <div className="answer-container">
        <p>user on date:</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti corporis corrupti voluptas quas excepturi? Illo non similique exercitationem in natus.</p>
    
        </div>

        <form>
            <input type="textarea" id="answer"></input>
            <br></br>
            <button className="answer-btn" type="submit">Add comment</button>
            
        </form>
        <Link to ="/">Back to dashboard</Link>
        </div>
        </>
    )
}
