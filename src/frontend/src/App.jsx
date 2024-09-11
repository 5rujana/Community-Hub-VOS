import './App.css'
import LandingPage from './pages/LandingPage'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
