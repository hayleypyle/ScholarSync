import React, { useState }  from 'react'
import LeftNav from './navbar'
import { useAuth } from '../js/AuthContext'
import { Route, Navigate, useNavigate } from 'react-router-dom'
import './css/dashboard.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Dashboard() {
    
    const { user } = useAuth();

    if (!user){
        return <Navigate to= "/login" />
    }

   
    return (
    <>
        <LeftNav></LeftNav>
    </>
    )
}