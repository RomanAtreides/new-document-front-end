import {useEffect, useRef, useState} from "react";

const BASE_URL = 'http://localhost:8080';

export default function InternalManagerApi() {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [internalManagers, setInternalManagers] = useState([]);
    const abortControllerRef = useRef(null);

    useEffect(() => {
        const fetchInternalManagers = async () => {
            //const timeout = 10000;
            //const controller = new AbortController();
            //const id = setTimeout(() => controller.abort(), timeout);

            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();
            setIsLoading(true);

            try {
                const response = await fetch(`${BASE_URL}/internal_managers`, {
                    signal: abortControllerRef.current?.signal,
                    headers: {
                        "content-type": "application/json"
                    }
                });
                //clearTimeout(id);

                if (!response.ok) {
                    console.log(`HTTP ${response.status}: ${response.statusText}`);
                    return {};
                }
                const internalManagers = await response.json();
                setInternalManagers(internalManagers);
            } catch (error) {
                //clearTimeout(id);

                if (error.name === "AbortError") {
                    console.log("Request aborted");
                }
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchInternalManagers();
    }, []);
}
