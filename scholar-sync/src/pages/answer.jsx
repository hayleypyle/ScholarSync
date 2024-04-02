import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";  


export default function Answer() {

    const [answer, setAnswer]=useState({
        answer: ''
    })

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
