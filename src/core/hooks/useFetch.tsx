import { useEffect, useState } from "react";

interface FetchResult<T> {
    data: T | undefined;
    loading: boolean;
    error: Error | undefined;
}

export function useFetch<T>(url: string, options: RequestInit): FetchResult<T> {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            if (!options.headers) {
                options.headers = { 'Content-Type': 'application/json'}
            }

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
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
}