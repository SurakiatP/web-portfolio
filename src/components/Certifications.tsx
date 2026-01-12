import styles from './Certifications.module.css';
import portfolioData from '@/data/portfolio.json';

const Certifications = () => {
    const { certifications } = portfolioData;

    return (
        <section id="certifications" className={`section ${styles.certifications}`}>
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className={styles.grid}>
                    {certifications.map((cert, index) => (
                        <div key={index} className={`card ${styles.card}`}>
                            <h3 className={styles.name}>{cert.name}</h3>
                            <p className={styles.issuer}>{cert.issuer}</p>
                            <span className={styles.date}>{cert.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
