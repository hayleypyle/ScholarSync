import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../js/AuthContext'
import './css/dashboard.css';



function LeftNav() {

    const navigate = useNavigate();
    const {user, logout} = useAuth();

    const handleLogout= () =>{
        logout();
        navigate('/login');
    }

return (
    <>
    <Navbar className="bg-body-tertiary navbar-expand-lg custom-topbar">
        <Container>
            <Navbar.Brand href="/">ScholarSync</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Welcome, {user} <button className="logout-btn" onClick={handleLogout}>Log Out</button>
            </Navbar.Text>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        


    </>
    );
}

export default LeftNav;