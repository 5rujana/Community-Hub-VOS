import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import feedPage from './components/feed.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

