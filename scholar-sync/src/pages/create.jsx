import React from 'react'
import {useState} from 'react'
import { useNavigate, Link } from "react-router-dom";


export default function Create() {

    const [question, setQuestion]=useState({
        question: ''
    })

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        console.log(question)
        setQuestion({ question: ''})
        navigate('/')
    }


    return (
        <>
        
        <div>
        <h2>Create Question</h2>
        <form onSubmit = {handleSubmit}>
            <input type="text" value={question.question} onChange = {e=>setQuestion({question: e.target.value})}></input>
            <button type="submit">Post Question</button>
            <Link to ="/">Back to dashboard</Link>
        </form>
        </div>
        </>
    )
}
