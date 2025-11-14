import '../styles/navbar.css';
import LI from '../assets/linkedin.svg';
import GH from '../assets/github.svg';
import IN from '../assets/instagram.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div class="header">
       <nav class="navbar">
          <div class="nav-links">
            <a class="nav-link" onClick={() => navigate('/')}>&lt;About_Me object at 0x784c574f10b0&gt;</a>
            <a class="nav-link" onClick={() => navigate('/projects')}>&lt;Projects object at 0x682g5h4a1010&gt;</a>
            <a class="nav-link" onClick={() => navigate('/resume')}>&lt;Resume object at 0x884c574f101f&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            <a class="nav-link" onClick={() => navigate('/contact')}>&lt;Contact object at 0x384e57461710&gt;</a>
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