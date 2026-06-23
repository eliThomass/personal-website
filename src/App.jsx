import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'

// Shared components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages we need to switch between
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div className="page-transition" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>

        <Route path="*" element={
            window.location.search.includes('?p=/') ? null : <Navigate to="/" replace />
        }/>
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
        <Navbar/>

        <main style={{flexGrow: 1}}>
          <AnimatedRoutes />
        </main>

        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App

