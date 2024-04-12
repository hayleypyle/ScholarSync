import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";  
import axios from 'axios'
import '../css/question.css'
import LeftNav from '../navbar'


export default function Resources() {
  const [values, setValues] = useState([]);
  const subcategory_id = '2';


  useEffect(() => {
      axios.get(`http://localhost:3000/?subcategory_id=${subcategory_id}`)
          .then((response) => {
              setValues(response.data);
              console.log(response.data)
          })
          .catch((error) => {
              console.error('Error fetching data:', error);
          });
  }, []); 

  

  return (
    <>
    <LeftNav></LeftNav>
      <div className="question-display">
      <h2>Resources</h2>
      <Link to="/create/2"><button>New Question</button></Link>
      
      <div className="question-container">
          {values.map((value) =>(
              <div key={value.id} className="question-wrapper">
                  <Link to={`/question/${value.id}`}>{value.title}</Link>
                  <h6>posted by {value.uname} on {value.created_at}</h6>
              </div>

          ))}

      </div>
      </div>
      </>
  )
}
