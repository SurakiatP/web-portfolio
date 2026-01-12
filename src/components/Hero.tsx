import Link from 'next/link';
import styles from './Hero.module.css';
import portfolioData from '@/data/portfolio.json';

const Hero = () => {
    const { profile } = portfolioData;

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <p className={styles.greeting}>Hello, I'm</p>
                    <h1 className={styles.name}>{profile.name}</h1>
                    <h2 className={styles.role}>{profile.role}</h2>
                    <p className={styles.bio}>{profile.bio}</p>
                    <div className={styles.actions}>
                        <Link href="#projects" className="btn btn-primary">
                            View Projects
                        </Link>
                        <Link href="#contact" className="btn btn-outline">
                            Contact Me
                        </Link>
                    </div>
                </div>
                <div className={styles.visual}>
                    {/* Abstract visual or placeholder for 3D element */}
                    <div className={styles.glow}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
