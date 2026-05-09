import {ReportForm} from "../../components/ReportForm/ReportForm";
import styles from "./ReportPage.module.css";

export function Report() {
    const createReport = (report) => {
        console.log("Report created:", report);
    };

    return (
        <div>
            <div className={styles.formContainer}>
                <ReportForm onCreateReport={createReport}/>
            </div>
        </div>
    );
}
