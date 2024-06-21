import { useEffect, useState, useCallback } from "react";

interface FetchResult<T> {
    data: T | undefined;
    loading: boolean;
    error: Error | undefined;
    refetch: () => void;
}

export function useFetch<T>(url: string, auth?: string, options?: RequestInit): FetchResult<T> {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();
    const [trigger, setTrigger] = useState(0);

    const fetchData = useCallback(async () => {
        setLoading(true);

        if (!options) {
            options = {};
        }

        if (auth) {
            options.headers = {
                ...options.headers,
                Authorization: 'Bearer ' + auth
            };
        }

        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json'
        };

        try {
            const response = await fetch(url, options);

            if (response.status !== 200) {
                throw new Error('Error en la petición');
            }

            const data = await response.json();
            setData(data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url, auth, options]);

    useEffect(() => {
        fetchData();
    }, [fetchData, trigger]);

    const refetch = () => setTrigger(prev => prev + 1);

    return { data, loading, error, refetch };
}
