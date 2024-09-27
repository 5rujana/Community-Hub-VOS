import './App.css'
import LandingPage from './pages/LandingPage'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import threadsPage from './pages/ThreadPage.jsx'
import feedPage from './components/feed.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='v1/' element={<LandingPage />} />
        <Route path='v1/signup' element={<SignupPage />} />
        <Route path='v1/login' element={<LoginPage />} />
        <Route path='v1/threads' element={<threadsPage />} />
        <Route path='v1/feed' element={<feedPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
