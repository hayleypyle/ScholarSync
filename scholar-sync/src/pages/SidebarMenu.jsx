import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { NavLink } from "react-router-dom";  





function SidebarMenu() {


    return (
        <div className="container-fluid">
        <div className="row">
            <div className="bg-dark min vh-100 p-0">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item text-white fs-4">
                        <NavLink to="/general-chat" className="nav-link text-white fs-5" aria-current="page">
                            <Icon.Chat />
                            <span className="ms-2">General Chat</span>
                            </NavLink>

                    </li>
                    <li className="nav-item text-white fs-4">
                    <NavLink to="/resources" className="nav-link text-white fs-5" aria-current="page">
                        <Icon.Compass />
                            <span className="ms-2">Resources</span>
                        </NavLink>
                    </li>
                    <li className="nav-item text-white fs-4">
                        <NavLink to="/management" className="nav-link text-white fs-5" aria-current="page">
                        <Icon.People />
                            <span className="ms-2">Classroom Management</span>
                        </NavLink>
                    </li>
                    <li className="nav-item text-white fs-4">
                        <NavLink to="/pedagogy" className="nav-link text-white fs-5" aria-current="page">
                        <Icon.Book />
                            <span className="ms-2">Pedagogy</span>
                        </NavLink>
                    </li>
                    <li className="nav-item text-white fs-4">
                        <NavLink to="/career" className="nav-link text-white fs-5" aria-current="page">
                        <Icon.Briefcase />
                            <span className="ms-2">Career Advice</span>
                        </NavLink>
                    </li>
                    <li className="nav-item text-white fs-4">
                        <NavLink to="/other" className="nav-link text-white fs-5" aria-current="page">
                        <Icon.Compass />
                            <span className="ms-2">Other</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
    }

export default SidebarMenu
