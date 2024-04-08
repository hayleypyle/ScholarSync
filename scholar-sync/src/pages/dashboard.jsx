import React, { useState }  from 'react'
import LeftNav from './navbar'
import { useAuth } from '../js/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'
import './css/dashboard.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Dashboard() {
    
    const { user } = useAuth();
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab]=useState('general')

    if (!user){
        return <Navigate to= "/" />
    }

    const handleTabChange = (tab) =>{
        setSelectedTab(tab);
    };

    const renderContent = () =>{
        switch (selectedTab){
            case 'general':
                return
        }
    }
    return (
    <>
        <LeftNav onTabChange={handleTabChange}></LeftNav>
    </>
    )
}