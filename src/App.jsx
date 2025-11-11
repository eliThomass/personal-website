import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Shared components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages we need to switch between
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

function App() {
  const repoName = import.meta.env.BASE_URL || '/'

  return (
    <BrowserRouter basename={repoName}>
      <div>
        <Navbar/>
        
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
            
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>
        </main>
        
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App