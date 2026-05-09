import {useCallback, useRef} from "react";
import { AppConstants } from "../util/constants.js";

export default function useReportApi(report) {
    // const [error, setError] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    const abortControllerRef = useRef(null);

    useCallback((report) => {
        const createReport = async () => {
            // Прерываем предыдущий запрос, если компонент перерендерился
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            // setIsLoading(true);
            // setError(null); // Сбрасываем предыдущую ошибку

            try {
                const response = await fetch(`${AppConstants.BACKEND_URL}/download`, {
                    signal: abortControllerRef.current.signal,
                    method: "post",
                    headers: {
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(report)
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Request aborted");
                    return; // Не сохраняем AbortError как ошибку
                }
                console.error("Fetch error:", error);
                // setError(error);
            } finally {
                // setIsLoading(false);
            }
        };
        createReport();

        // Cleanup: прерываем запрос при размонтировании
        return () => {
            abortControllerRef.current?.abort();
        };
    },[report]);
    // return {error, isLoading};
}
