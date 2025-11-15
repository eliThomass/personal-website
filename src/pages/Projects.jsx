import '../styles/projects.css';
import GC from '../assets/groupchat.jpeg';
import FP from '../assets/formulapage.png';
import CM from '../assets/compiler.png';
function Projects() {
  return (
    <div class='cards'>
      <div class='projbody'>
        <div class='projectcard'>
          <div class='projheader'>
            <span style={{fontSize: "30px", fontStyle: "bold", marginBottom: "5px"}}>Group Chat Web Application</span> 
            <p>Python, JavaScript, FastAPI, PostgreSQL, React.js, Websockets</p>
            <span style={{fontSize: "20px", fontStyle: "italic", paddingTop: "5px"}}>&nbsp;Sept. 2025</span>
            <img src={GC} class='projimg'></img>
          </div>
          <div class='projectdesc'>
            <p>• Built a full-stack messaging platform with JWT-secured authentication, group chats, invitations, and user management.</p>
  <p>• Designed a PostgreSQL schema (accounts, chats, messages, invites) with SQLAlchemy ORM to ensure persistence,</p>
  relational integrity, and data validation.
  <p>• Integrated a React frontend and implemented WebSockets for real-time chat messaging, enabling live updates
  across multiple clients.</p>
          </div>
        </div>
      </div>
      <div class='projbody'>
        <div class='projectcard'>
          <div class='projheader'>
            <span style={{fontSize: "30px", fontStyle: "bold", marginBottom: "5px"}}>Formula SAE Club Website</span> 
            <p>HTML, CSS, JavaScript</p>
            <span style={{fontSize: "20px", fontStyle: "italic", paddingTop: "5px"}}>&nbsp;Oct. 2025</span>
            <img src={FP} class='projimg'></img>
          </div>
          <div class='projectdesc'>
            <p>• Developed and deployed a 6-page, public-facing static site (csuftitanracing.com) to showcase engineering projects,
attract sponsors, and recruit new members.</p>
<p>• Engineered a responsive, mobile-first UI, resolving complex cross-browser rendering bugs to ensure a consistent
experience on all devices.</p>
<p>• Achieved an average Google Lighthouse score of 92+ by optimizing site performance (preloading, lazy-loading) and
implementing on-page SEO (meta tags, sitemap).</p>
          </div>
        </div>
      </div>
      <div class='projbody'>
        <div class='projectcard'>
          <div class='projheader'>
            <span style={{fontSize: "30px", fontStyle: "bold", marginBottom: "5px"}}>Rat25F Programming Language</span> 
            <p>C++</p>
            <span style={{fontSize: "20px", fontStyle: "italic", paddingTop: "5px"}}>&nbsp;Nov. 2025</span>
            <img src={CM} class='projimg'></img>
          </div>
          <div class='projectdesc'>
            <p>• Developed a multi-pass compiler for the Rat25F imperative language from formal specifications (CPSC 323).</p>
    <p>• Implemented a lexical analyzer to parse source code into tokens and a recursive-descent parser to validate the
      program's structure against a formal BNF grammar.</p>
    <p>• Integrated a semantic analyzer to enforce static rules, including type-checking and variable-declaration-before-use,
      to produce an executable file.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects