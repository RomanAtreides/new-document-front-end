import { Header } from '../../components/Header/Header';
import styles from './MainPage.module.css';

export function Main() {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <Header />
            </div>
        </div>
    );
}
