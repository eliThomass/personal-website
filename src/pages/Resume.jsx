import RESUME from '../assets/Elias_Thomas_Resume.jpg';
import '../styles/resume.css';
function Resume() {
  return (
    <div className='resume'>
      <img src={RESUME} className='resumeimg' alt='Resume' />
    </div>
  )
}

export default Resume
