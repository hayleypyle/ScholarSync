import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom'
import {AuthProvider} from './js/AuthContext'
import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Create from './pages/create'
import Answer from './pages/answer'
import Question from './pages/question'
import GeneralChat from './pages/topics/generalchat'
import Resources from './pages/topics/resources';
import Management from './pages/topics/management';
import Pedagogy from './pages/topics/pedagogy';
import Career from './pages/topics/career';
import Other from './pages/topics/other';

function App() {

  
  return (
    <>
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path='/register' element={<Register/>}>Register User</Route>
          <Route path='/login' element={<Login/>}>Login</Route>
          <Route path='/create/:id' element={<Create/>}>Create Question</Route>
          <Route path='/answer/:id' element={<Answer/>}>Answer Question</Route>
          <Route path='/question/:id' element={<Question/>}>View Question and Answers</Route>
          <Route path="/general-chat" element={<GeneralChat />}/>
          <Route path="/resources" element={<Resources />}/>
          <Route path="/management" element={<Management />}/>
          <Route path="/pedagogy" element={<Pedagogy />}/>
          <Route path="/career" element={<Career />}/>
          <Route path="/other" element={<Other />}/>
        </Routes>
      </HashRouter>
    </AuthProvider>
    </>
  )
}

export default App
