import styles from './Projects.module.css';
import portfolioData from '@/data/portfolio.json';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={`card ${styles.card}`}>
                            {/* <div className={styles.imagePlaceholder}></div> */}
                            <div className={styles.content}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.techStack}>
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className={styles.tech}>{tech}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    View Project &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
