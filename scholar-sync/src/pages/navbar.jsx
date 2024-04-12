import React from 'react';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import { useAuth } from '../js/AuthContext'
import './css/dashboard.css';
import SidebarMenu from './SidebarMenu'



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
            <Navbar.Brand href="/">ScholarSync</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Welcome, {user} <button className="logout-btn" onClick={handleLogout}>Log Out</button>
            </Navbar.Text>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <SidebarMenu></SidebarMenu>

    </>
    );
}

export default LeftNav;