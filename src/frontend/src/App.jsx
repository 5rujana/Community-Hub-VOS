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
        <Route path='v1/' element={<LandingPage />} /> {/* Deployed */}
        <Route path='v1/signup' element={<SignupPage />} /> {/* Deployed */}
        <Route path='v1/login' element={<LoginPage />} />  {/* Deployed */}
        <Route path='v1/home' element={<DashboardSection />} /> {/* Deployed */}
        <Route path='v1/threads' element={<ThreadsPage />} /> {/* Deployed */}
        <Route path='v1/feed' element={<FeedPage/>} />  {/* Deployed */}
        <Route path='v1/dashboard' element={<DashboardSection />} /> {/* Deployed */}
        <Route path='v1/herosection' element={<HeroSection />} />   {/* Deployed */}
        <Route path='v1/profile' element = {<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
