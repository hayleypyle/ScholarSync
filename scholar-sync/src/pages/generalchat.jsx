import React from 'react'
import { Link } from "react-router-dom";  


export default function GeneralChat() {
    return (
        <div>
        <h2>General Chat</h2>
        <button>New Question</button>
        <div className="question-container">
            <div className="question-wrapper">
            <Link>Question 1</Link> posted by user at date. 2 Answers
            </div>
            <div className="question-wrapper">
            <Link>Question 2</Link> posted by user at date. 3 Answers
            </div>

            

        </div>
        </div>
    )
}
