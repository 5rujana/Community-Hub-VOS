import './App.css'
import LandingPage from './pages/LandingPage'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ThreadsPage from './pages/ThreadPage.jsx'
import DashboardSection from './pages/dashboard.jsx';
import HeroSection from './pages/herosection.jsx'
import FeedPage from './pages/feedPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='v1/' element={<LandingPage />} />
        <Route path='v1/signup' element={<SignupPage />} />
        <Route path='v1/login' element={<LoginPage />} />
        <Route path='v1/home' element={<DashboardSection />} />
        <Route path='v1/threads' element={<ThreadsPage />} />
        <Route path='v1/feed' element={<FeedPage/>} />
        <Route path='v1/dashboard' element={<DashboardSection />} />
        <Route path='v1/herosection' element={<HeroSection />} />
        <Route path='v1/profile' element = {<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
