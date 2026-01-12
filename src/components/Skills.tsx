import styles from './Skills.module.css';
import portfolioData from '@/data/portfolio.json';

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section id="skills" className={`section ${styles.skills}`}>
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className={styles.grid}>
                    {skills.map((category, index) => (
                        <div key={index} className="card">
                            <h3 className={styles.categoryTitle}>{category.category}</h3>
                            <div className={styles.tags}>
                                {category.items.map((item, idx) => (
                                    <span key={idx} className={styles.tag}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
