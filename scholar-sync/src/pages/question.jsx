import React from 'react'
import { Link } from "react-router-dom";  


export default function Question() {
    return (
        <>
        <div>
        <h2>Question and Answers Display</h2>
        <Link to ="/answer:id">Answer this Question</Link>
        </div>
        </>
    )
}
