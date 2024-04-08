import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import { useAuth } from '../js/AuthContext'
import './css/dashboard.css';
import GeneralChat from './topics/generalchat';
import Resources from './topics/resources';
import Management from './topics/management';
import Pedagogy from './topics/pedagogy';
import Career from './topics/career';
import Other from './topics/other';


function LeftNav() {

    const navigate = useNavigate();
    const {user, logout} = useAuth();

    const handleLogout= () =>{
        logout();
        navigate('/');
    }

return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">ScholarSync</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Welcome, {user} <button className="logout-btn" onClick={handleLogout}>Log Out</button>
            </Navbar.Text>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Tab.Container id="left-tabs-example" defaultActiveKey="general-chat">
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="general-chat">General Chat</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="resources">Resources</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="management">Classroom Management</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="pedagogy">Pedagogy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="career">Career Advice</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="misc">Misc</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="general-chat"> 
                <GeneralChat></GeneralChat>
                </Tab.Pane>
                <Tab.Pane eventKey="resources">
                    <Resources></Resources>
                </Tab.Pane>
                <Tab.Pane eventKey="management">
                    <Management></Management>
                </Tab.Pane>
                <Tab.Pane eventKey="pedagogy">
                    <Pedagogy></Pedagogy>
                </Tab.Pane>
                <Tab.Pane eventKey="career">
                    <Career></Career>
                </Tab.Pane>
                <Tab.Pane eventKey="misc">
                    <Other></Other>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </>
    );
}

export default LeftNav;