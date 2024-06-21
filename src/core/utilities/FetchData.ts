type Status = "pending" | "success" | "error";


const getSuspender = <T>(promise: Promise<T>) => {
    let status: Status = "pending";
    let response: T | undefined;

    const suspender = promise.then(
        (res) => {
            status = "success";
            response = res;
        },
        (err) => {
            status = "error";
            response = err;
        }
    );

    const read = () => {
        switch (status) {
            case "pending":
                throw suspender;
            case "error":
                throw response;
            default:
                return response;
        }
    };

    return { read };
};

export function fetchData<T>(url: string, auth?: string, options?: RequestInit) {
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

    const promise = fetch(url, options)
        .then((response) => response.json())
        .then((json) => json as T);

    return getSuspender(promise);
}
