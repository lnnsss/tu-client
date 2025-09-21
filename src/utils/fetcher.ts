export async function fetcher<T>(
    url: string,
    options: RequestInit = {}
): Promise<T> {
    try {
        const res = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
            ...options,
        });

        if (!res.ok) {
            const text = await res.text();
            throw new Error(`Ошибка запроса: ${res.status} - ${text}`);
        }

        return res.json() as Promise<T>;
    } catch (err) {
        console.error("Fetcher error:", err);
        throw err;
    }
}
