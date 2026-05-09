import {useEffect, useRef, useState} from "react";
import { AppConstants } from "../util/constants.js";

export default function useInternalManagerApi() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [internalManagers, setInternalManagers] = useState([]);
    const abortControllerRef = useRef(null);

    useEffect(() => {
        const fetchInternalManagers = async () => {
            // Прерываем предыдущий запрос, если компонент перерендерился
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            setIsLoading(true);
            setError(null); // Сбрасываем предыдущую ошибку

            try {
                const response = await fetch(`${AppConstants.BACKEND_URL}/internal_managers`, {
                    signal: abortControllerRef.current.signal,
                    headers: {
                        "Accept": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                setInternalManagers(data);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Request aborted");
                    return; // Не сохраняем AbortError как ошибку
                }
                console.error("Fetch error:", error);
                setError(error);
                setInternalManagers([]); // Очищаем данные при ошибке
            } finally {
                setIsLoading(false);
            }
        };
        fetchInternalManagers();

        // Cleanup: прерываем запрос при размонтировании
        return () => {
            abortControllerRef.current?.abort();
        };
    }, []);
    return {error, isLoading, internalManagers};
}
