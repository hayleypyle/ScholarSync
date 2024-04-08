import React from 'react'
import {useState} from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";


export default function Answer() {
    const {id} = useParams();

    const [answer, setAnswer]=useState({
        answer: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:3000/answer/${id}`)
            .then((response) => {
                console.log(response.data);
                setValues(response.data[0]);
                
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id]); 


    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        console.log(answer)
        setAnswer({ answer: ''})
        navigate('/question:id')
    }


    return (
        <>
        
        <div>
        <h2>Answer Question</h2>
        <form onSubmit = {handleSubmit}>
            <input type="textarea" value={answer.answer} onChange = {e=>setAnswer({answer: e.target.value})}></input>
            <button type="submit">Answer Question</button>
            <Link to="/question:id">Back to question</Link>
        </form>
        </div>
        </>
    )
}
