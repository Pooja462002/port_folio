import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>I am a full-stack developer with a passion for building beautiful web applications.</p>

      {/* Buttons to navigate to different pages */}
      <div className="button-container">
        <button onClick={() => navigate('/about')} className="home-button">
          About Me
        </button>
        <button onClick={() => navigate('/projects')} className="home-button">
          Projects
        </button>
        <button onClick={() => navigate('/contact')} className="home-button">
          Contact
        </button>
      </div>
    </motion.div>
  );
};

export default Home;