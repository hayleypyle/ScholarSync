import React, { useState }  from 'react'
import LeftNav from './navbar'
import { useAuth } from '../js/AuthContext'
import { Navigate } from 'react-router-dom'
import './css/dashboard.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SidebarMenu from './SidebarMenu'

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
    <div className="question-display">
    <h2>Welcome to Scholar Sync!</h2>
    </div>
    </div>
    </div>
    </>
    )
}