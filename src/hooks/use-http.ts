import { useCallback, useState } from "react";

type RequestConfig = {
    url: string;
    method?: string;
    headers?: {};
    body?: {};
};

type ApplyDataFn<T> = (data: T[]) => void;

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const sendRequest = useCallback(
        (requestConfig: RequestConfig, applyData: ApplyDataFn<any> | null) => {
            setIsLoading(true);
            setError(null);

            fetch(requestConfig.url, {
                method: requestConfig.method || "GET",
                headers: requestConfig.headers || {},
                body: requestConfig.body
                    ? JSON.stringify(requestConfig.body)
                    : null,
            })
                .then((res) => {
                    if (!res.ok) throw new Error("Request failed!");
                    return res.json();
                })
                .then(applyData)
                .catch((err) =>
                    setError(err.message || "Something went wrong!")
                )
                .finally(() => setIsLoading(false));
        },
        []
    );

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
