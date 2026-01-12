import styles from './Experience.module.css';
import portfolioData from '@/data/portfolio.json';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className={`section ${styles.experience}`}>
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className={styles.timeline}>
                    {experience.map((job, index) => (
                        <div key={index} className={`card ${styles.card}`}>
                            <div className={styles.header}>
                                <h3 className={styles.role}>{job.role}</h3>
                                <span className={styles.period}>{job.period}</span>
                            </div>
                            <h4 className={styles.company}>{job.company}</h4>
                            <p className={styles.description}>{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
