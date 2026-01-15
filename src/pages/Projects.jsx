import '../styles/projects.css';
import GC from '../assets/groupchat.jpeg';
import FP from '../assets/formulapage.png';
import CM from '../assets/compiler.png';
import AQ from '../assets/airquality.png';
import AV from '../assets/algovisu.png';
import SP from '../assets/steampicker.png'
function Projects() {
  return (
    <div class='cards'>
      <div class='projbody'>
          <div class='projectcard'>
            <div class='projheader'>
              <span style={{fontSize: "30px", fontStyle: "bold", marginBottom: "5px"}}>Air Quality Monitoring System</span> 
              <p>C++, ESP32, Django, MySQL, React</p>
              <span style={{fontSize: "20px", fontStyle: "italic", paddingTop: "5px"}}>&nbsp;Jan. 2026</span>
                <img src={AQ} class='projimg'></img>
            </div>
            <div class='projectdesc'>
              <p>• Developed an end-to-end IoT system using an ESP32 and BME680 sensor to monitor VOCs, CO2 equivalents, temperature, and humidity in real-time.</p>
              <p>• Built a Django backend with a MySQL database to ingest and store sensor data via authenticated HTTP POST requests at 15-minute intervals.</p>
              <p>• Designed a responsive React dashboard to visualize environmental trends and historical data, deployed on a Linux home server for 24/7 monitoring.</p>
            </div>
          </div>
        </div>
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
          <p>React.js, Vite, Vercel, CSS</p>
          <span style={{fontSize: "20px", fontStyle: "italic", paddingTop: "5px"}}>&nbsp;Oct. 2025 – Present</span>
          <img src={FP} class='projimg' alt="Formula SAE Website Preview"></img>
        </div>
        <div class='projectdesc'>
          <p>• Designed and engineered the official team website, migrating from static HTML to a scalable React.js SPA to improve maintainability and achieve a 95+ Lighthouse performance score.</p>
          <p>• Implemented React Router and React Helmet for seamless navigation and SEO, while establishing a CI/CD pipeline via Vercel for automated, zero-downtime deployments.</p>
          <p>• Created a responsive, mobile-first UI that showcases engineering projects to prospective sponsors, directly supporting the team's recruitment and fundraising initiatives.</p>
        </div>
      </div>
    </div>
      <div class='projbody'>
          <div class='projectcard'>
            <div class='projheader'>
              <span style={{fontSize: "30px", fontStyle: "bold", marginBottom: "5px"}}>Steam Game & Achievement Tracker</span> 
              <p>Python, React.js, FastAPI, PostgreSQL, Steam API</p>
              <span style={{fontSize: "20px", fontStyle: "italic", paddingTop: "5px"}}>&nbsp;Nov. 2025</span>
              <img src={SP} class='projimg'></img>
            </div>
            <div class='projectdesc'>
              <p>• Engineered a full-stack application utilizing the Steam Web API to track real-time user statistics, game libraries, and rare achievement data.</p>
              <p>• Architected a relational database schema in PostgreSQL using Supabase to cache user data, significantly reducing API latency and optimizing performance for repeat queries.</p>
              <p>• Collaborated in an Agile/Scrum environment as part of a 4-person team, managing the development lifecycle through Git and bi-weekly sprint reviews.</p>
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
      <div class='projbody'>
          <div class='projectcard'>
            <div class='projheader'>
              <span style={{fontSize: "30px", fontStyle: "bold", marginBottom: "5px"}}>Algorithm Visualizer</span> 
              <p>React.js, JavaScript, HTML, CSS</p>
              <span style={{fontSize: "20px", fontStyle: "italic", paddingTop: "5px"}}>&nbsp;Nov. 2025</span>
              <img src={AV} class='projimg'></img>
            </div>
            <div class='projectdesc'>
              <p>• Developed an interactive frontend application allowing users to visualize pathfinding algorithms like Breadth-First Search (BFS) and Depth-First Search (DFS), as well as sorting algorithms including Bubble Sort and Insertion Sort.</p>
              <p>• Implemented interactive maze editing features, enabling users to dynamically build obstacles and observe real-time algorithmic responses and pathfinding logic.</p>
              <p>• Focused on creating an intuitive UI/UX to make complex computer science concepts visually accessible and engaging.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects
