import styles from './header.module.css'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link to="/">Elaine Chen</Link>
            </div>

            <nav className={styles.right}>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
    
}