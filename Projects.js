import './Projects.css';

const projects = [
  {
    name: 'Project 1',
    description: 'This is a description of Project 1.',
    link: 'https://github.com/yourusername/project1',
    image: '/assets/project1.png',
  },
  {
    name: 'Project 2',
    description: 'This is a description of Project 2.',
    link: 'https://github.com/yourusername/project2',
    image: '/assets/project2.png',
  }
];

const Projects = () => (
  <div className="projects">
    <h2>My Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
