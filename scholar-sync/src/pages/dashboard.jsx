import React from 'react'
import LeftNav from './navbar'
import { useAuth } from '../js/AuthContext'
import { Navigate } from 'react-router-dom'
import './dashboard.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Dashboard() {
    
    const { user } = useAuth();


    if (!user){
        return <Navigate to= "/" />
    }
    return (
    <>
        <LeftNav></LeftNav>
    </>
    )
}
