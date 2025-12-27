import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                Elaine Chen
            </div>

            <nav className={styles.right}>
                <a href="#">Portfolio</a>
                <a href="#">Project</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
    
}