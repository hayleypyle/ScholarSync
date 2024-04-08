import React from 'react';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import {AuthProvider} from './js/AuthContext'
import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Create from './pages/create'
import Answer from './pages/answer'
import Question from './pages/question'

function App() {

  
  return (
    <>
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path='/register' element={<Register/>}>Register User</Route>
          <Route path='/' element={<Login/>}>Login</Route>
          <Route path='/create/:id' element={<Create/>}>Create Question</Route>
          <Route path='/answer/:id' element={<Answer/>}>Answer Question</Route>
          <Route path='/question/:id' element={<Question/>}>View Question and Answers</Route>
        </Routes>

      </HashRouter>
    </AuthProvider>
    </>
  )
}

export default App
