import styles from './Header.module.css';

export function Header() {
    return (
        <header>
            <h1 className={styles.title}>This is the Header</h1>
        </header>
    );
}
