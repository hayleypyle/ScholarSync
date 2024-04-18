import React, { useState }  from 'react'
import LeftNav from './navbar'
import { useAuth } from '../js/AuthContext'
import { Navigate } from 'react-router-dom'
import './css/dashboard.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SidebarMenu from './SidebarMenu'
import * as Icon from 'react-bootstrap-icons';
import image from '../images/AppleDesign.jpg'


export default function Dashboard() {
    
    const { user } = useAuth();

    if (!user){
        return <Navigate to= "/login" />
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
    <div className="welcome-container">
        <div className="welcome">
        <h2>Welcome to Scholar Sync!</h2>
        <h5> Scholar Sync is a space where educators can seek out the advice and 
            expertise of other teachers.</h5>
        <h6>Select a topic to get started!</h6>
        <img src={image} className="image"></img>
        </div>
        <div className="icon-container">
        <a href="https://github.com/hayleypyle">
        <Icon.Github className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/hayley-pyle/">
        <Icon.Linkedin className="icon"/>
        </a>
        </div>
    </div>
    </div>
    </div>
    </>
    )
}