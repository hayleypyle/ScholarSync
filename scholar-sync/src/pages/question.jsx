import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/question.css';
import { useAuth } from '../js/AuthContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import LeftNav from './navbar'



export default function Question() {
    const { id } = useParams();
    const { user } = useAuth();
    const [values, setValues] = useState(null);
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        console.log(e.target)
        const answer = e.target.answer.value;

        axios.post('http://localhost:3000/answer', {
            subcategory_id: '1',
            question_id: id,
            answer: answer,
            uname: user
        })
        .then((res) => {
            window.location.reload();

        })
        .catch((error) => {
            console.error('Error submitting answer', error);
        });
    }

    return (
        <>
        <LeftNav></LeftNav>
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

                        <Button variant="primary" onClick={handleShow}>
                            Answer Question
                        </Button>

                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                            <Modal.Title>Answer Question</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" name="answer" rows={3} required />
                                <Button variant="secondary" onClick={handleClose}>
                                Close
                                </Button>
                                <Button type="submit" variant="primary">
                                Post
                            </Button>

                                </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            
                            </Modal.Footer>
                        </Modal>


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
                <Link to="/">Back to dashboard</Link>
            </div>
        </>
    );
}
