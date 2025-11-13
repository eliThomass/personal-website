import '../styles/navbar.css';
import LI from '../assets/linkedin.svg';
import GH from '../assets/github.svg';
import IN from '../assets/instagram.svg';
function Navbar() {
  return (
    <div class="header">
       <nav class="navbar">
          <span class="name">Eli Thomas</span>

          <div class="nav-links">
            <a class="nav-link">Projects</a>
            <a class="nav-link">Resume</a>
            <a class="nav-link">Contact</a>
          </div>

          <div class="social-icons">
            <a href="https://www.linkedin.com/in/eli-thomas/" target="_blank"><img src={LI} class="icon"></img></a>
            <a href="https://github.com/eliThomass" target="_blank"><img src={GH} class="icon"></img></a>
            <a href="https://www.instagram.com/eli_thomas222/" target="_blank"><img src={IN} class="icon"></img></a>
          </div>
          
       </nav>
    </div>
  )
}

export default Navbar