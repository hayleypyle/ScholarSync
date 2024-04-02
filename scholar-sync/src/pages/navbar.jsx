import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import './dashboard.css';
import GeneralChat from './generalchat';



function LeftNav() {
    const [user, setUser] = useState();
    const [values, setValues] = useState();

    const navigate = useNavigate();

    let username = localStorage.getItem('user') 

    const handleLogout = () =>{
        setUser(null);
        setValues({});
        localStorage.clear();
        navigate('/')
    }
    
return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">ScholarSync</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Welcome, {username} <button className="logout-btn" onClick={handleLogout}>Log Out</button>
            </Navbar.Text>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">General Chat</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Resources</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">Classroom Management</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="fourth">Pedagogy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="fifth">Career Advice</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="sixth">Misc</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first"> 
                <GeneralChat></GeneralChat>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
                <Tab.Pane eventKey="fourth">Fourth tab content</Tab.Pane>
                <Tab.Pane eventKey="fifth">Fifth tab content</Tab.Pane>
                <Tab.Pane eventKey="sixth">Sixth tab content</Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </>
    );
}

export default LeftNav;