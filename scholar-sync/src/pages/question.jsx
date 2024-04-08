
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/question.css';
import { useAuth } from '../js/AuthContext';


export default function Question() {
    const { id } = useParams();
    const { user } = useAuth();
    const [values, setValues] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/question/${id}`)
            .then((response) => {
                if (response.data) {
                    setValues(response.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/answer', {
            subcategory_id: '1',
            question_id: id,
            answer: e.target.elements.answer.value,
            uname: user
        })
        .then((res) => {
            navigate('/question/' + id);
        })
        .catch((error) => {
            console.error('Error submitting answer', error);
        });
    }

    return (
        <>
            <div className="question-detail">
                {values ? (
                    <>
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
                            {values.answers && values.answers.map(answer => (
                                <div key={answer.id} className="answer">
                                    <p>{answer.uname} on {answer.created_at} said:</p>
                                    <p>{answer.answer}</p>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                <div className="post-answer">
                    <h6>Answer Question</h6>
                    <form onSubmit={handleSubmit}>
                        <input type="textarea" name="answer" className="answer-box" required />
                        <div><button type="submit" className="post-answer-btn">Answer Question</button></div>
                    </form>
                </div>
                <Link to="/">Back to dashboard</Link>
            </div>
        </>
    );
}
