// src/pages/UnderConstruction.js

// Basic inline styles so you don't need a new CSS file
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
    textAlign: 'center',
    padding: '20px'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '2.5rem'
  },
  links: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    fontSize: '1rem',
    color: '#007aff',
    textDecoration: 'none',
    fontWeight: '500',
    border: '1px solid #007aff',
    padding: '10px 20px',
    borderRadius: '8px',
    transition: 'all 0.3s'
  }
};

function UnderConstruction() {
  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.title}>Eli Thomas</h1>
      <p style={styles.subtitle}>Software Engineer Portfolio</p>
      <p style={{ color: '#666', marginBottom: '2.5rem' }}>
        My new website is under construction, but you can see my work here:
      </p>
      
      <div style={styles.links}>
        <a href="https://github.com/eliThomass" style={styles.link} target="_blank" rel="noopener noreferrer">
          View GitHub
        </a>
        <a href="https://www.linkedin.com/in/eli-thomas/" style={styles.link} target="_blank" rel="noopener noreferrer">
          View LinkedIn
        </a>
        <a href="Elias_Thomas_Resume.pdf" style={styles.link} target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>
    </div>
    </>
  );
}

export default UnderConstruction;