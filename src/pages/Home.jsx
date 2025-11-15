import '../styles/home.css';
import ME from '../assets/176323023143100446.jpeg';
import  { useState, useEffect } from 'react';
function Home() {
  const msg = "Hello! I'm Eli.";
  const msg2 = ""
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (text.length >= msg.length) {
        return;
    }
    
    const timer = setInterval(() => {
      setText(prevText => {
        const nextIndex = prevText.length;
        
        if (nextIndex < msg.length) {
          return prevText + msg[nextIndex];
        } else {
          clearInterval(timer); 
          return prevText;
        }
      });
    }, 175);

    return () => clearInterval(timer);
    
  }, [msg]);

  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
        setShowCursor(prevShowCursor => !prevShowCursor);
    }, 500);

    return () => clearInterval(cursorBlinkInterval);

  }, [text, msg]);

  return (
    <div class='body'>
      <div class='wrapper'>
        <div class='introtext'>
          <span class='hi'> &gt; {text}
          {showCursor && <span className="hi">_</span>}
          </span>
          <p class='aboutme'>
            &gt; I'm an aspiring SWE with an interest in Fullstack Development and Embedded Systems. My passion for Computer Science comes from building things. 
            There's nothing more satisfying than watching a concept evolve from lines of code in an editor to a fully functional application that solves a real problem. 
            In terms of Full-Stack Development, I'm particularly interested in the intersection of back-end performance and intuitive user experience (UX). 
            I treat software development as a craft, committed to writing clean, maintainable code and 
            delivering polished products that are both technically sophisticated and genuinely pleasant for the end-user to interact with.
          </p>
          
        </div>
        <div class='me-container'>
          <img src={ME} class='me'></img>
        </div>
      </div>
      <div class='skills'>
        <p class='skillhead'>&gt; My Skills</p>
        <div class='skillbody'>
          <div class='skilldesc'>
            <p class='marginbot'>Languages</p>
            <div class='skillbox'>
              <span>Python</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>C/C++</span>
              <span>HTML/CSS</span>
            </div>
          </div>
          <div class='skilldesc'>
            <p class='marginbot'>Frontend</p>
            <div class='skillbox'>
              <span>React.js</span>
              <span>State Management</span>
              <span>Response Design</span>
              <span>UI/UX</span>
            </div>
          </div>
          <div class='skilldesc'>
            <p class='marginbot'>Backend</p>
            <div class='skillbox'>
              <span>FastAPI</span>
              <span>RESTful APIs</span>
              <span>JWT</span>
            </div>
          </div>
          <div class='skilldesc'>
            <p class='marginbot'>Databases</p>
            <div class='skillbox'>
              <span>SQL (General)</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>ER Diagrams</span>
              <span>DB Modeling</span>
            </div>
          </div>
          <div class='skilldesc'>
            <p class='marginbot'>Embedded Systems</p>
            <div class='skillbox'>
              <span>Microcontrollers</span>
              <span>Firmware Development</span>
              <span>Circuitry</span>
            </div>
          </div>
          <div class='skilldesc'>
            <p class='marginbot'>Tools</p>
            <div class='skillbox'>
              <span>Git/GitHub</span>
              <span>Linux/Unix</span>
              <span>VS Code</span>
            </div>
          </div>
          <div class='skilldesc'>
            <p class='marginbot'>Methodology</p>
            <div class='skillbox'>
              <span>Agile/Scrum</span>
              <span>Problem Solving</span>
              <span>Clean Code Principles</span>
              <span>Debugging & Testing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

/*
Category,Skill
        Languages,JavaScript (ES6+)
        Languages,Python
        Languages,TypeScript
        Languages,C/C++
        Languages,HTML5/CSS3
        ---
        Front-End Development,React.js
        Front-End Development,State Management
        Front-End Development,Responsive Design
        ---
        Back-End Development,FastAPI
        Back-End Development,RESTful APIs
        Back-End Development,Authentication (OAuth, JWT)
        ---
        Databases,SQL (General)
        Databases,PostgreSQL
        Databases,MySQL
        ---
        Embedded Systems,Microcontrollers
        Embedded Systems,Firmware Development
        Embedded Systems,Circuitry
        ---
        Tools & DevOps,Git/GitHub
        Tools & DevOps,Linux
        Tools & DevOps,VS Code
        ---
        Soft Skills & Methodology,Problem-Solving
        Soft Skills & Methodology,Clean Code Principles
        Soft Skills & Methodology,Agile/Scrum
        Soft Skills & Methodology,Debugging & Testing
*/