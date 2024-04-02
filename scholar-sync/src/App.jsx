import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Create from './pages/create'
import Answer from './pages/answer'
import Question from './pages/question'

function App() {
  const isAuthenticated = localStorage.getItem('user');

  return (
    <>
    <HashRouter>
    <Routes>
      {/* <Route path='/' element={<Login/>}>Login</Route> */}
      <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login/>} />
      <Route path='/register' element={<Register/>}>Register User</Route>
      <Route path='/dashboard' element={<Dashboard/>}>Dashboard</Route>
      <Route path='/create:id' element={<Create/>}>Create Question</Route>
      <Route path='/answer:id' element={<Answer/>}>Answer Question</Route>
      <Route path='/question:id' element={<Question/>}>View Question and Answers</Route>



    
    </Routes>

    </HashRouter>
    </>
  )
}

export default App
