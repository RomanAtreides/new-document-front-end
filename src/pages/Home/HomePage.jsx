import { Header } from "../../components/Header/Header";
import styles from "./HomePage.module.css";

export function Home() {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <Header />
            </div>
        </div>
    );
}
