import styles from './LoginPage.module.css';

export function Login() {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" autoComplete="your email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
        </div>
    );
}
