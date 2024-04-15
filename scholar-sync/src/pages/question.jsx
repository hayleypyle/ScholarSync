import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/question.css';
import { useAuth } from '../js/AuthContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import LeftNav from './navbar'
import SidebarMenu from './SidebarMenu'



export default function Question() {
    const { id } = useParams();
    const { user } = useAuth();
    const [values, setValues] = useState(null);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();



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

    const subcategoryUrls = {
        1: '/#/general-chat',
        2: '/#/resources',
        3: '/#/management',
        4: '/#/pedagogy',
        5: '/#/career',
        6: '/#/other',
    };

    const navigateBackToSubcategory = (subcategory_id) => {
        const subcategoryUrl = subcategoryUrls[values.subcategory_id];
        if (subcategoryUrl) {
            window.location.href = subcategoryUrl;
        } else {
            console.error(`Subcategory URL not found for ID ${values.subcategory_id}`);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        const answer = e.target.answer.value;

        axios.post('http://localhost:3000/answer', {
            subcategory_id: values.subcategory_id,
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
        <div className="container-fluid d-flex flex-row p-0">
            <div className="col-lg-3">
                <SidebarMenu>
                </SidebarMenu>
            </div>

            <div className="col-lg-9">
            <div className="question-display">
            <div className="question-detail">
                {values ? (
                    <>
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
                <button onClick={() => navigateBackToSubcategory(values.subcategory_id)}>Back</button>

            </div>
            </div>
            </div>
            </div>
        </>
    );
}
