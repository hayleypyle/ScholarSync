import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Welcome from './pages/welcome'
import Register from './pages/register'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <>
    <HashRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}>Welcome</Route>
      <Route path='/register' element={<Register/>}>Register User</Route>
      <Route path='/dashboard' element={<Dashboard/>}>Dashboard</Route>
    
    </Routes>

    </HashRouter>
    </>
  )
}

export default App
