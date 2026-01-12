import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Alex<span className={styles.highlight}>.AI</span>
                </Link>
                <ul className={styles.links}>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#certifications">Certifications</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
