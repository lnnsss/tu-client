const API_URL = import.meta.env.VITE_API_URL;

/**
 * Универсальная функция для запросов к backend
 * @param endpoint — путь после API_URL, например "/words"
 * @param options — RequestInit: method, body, headers
 * @returns Promise<T>
 */
export async function api<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
        const res = await fetch(`${API_URL}${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
            ...options,
        });

        if (!res.ok) {
            let errorText = "";
            try {
                const data = await res.json();
                errorText = JSON.stringify(data);
            } catch {
                errorText = await res.text();
            }
            throw new Error(`Ошибка API: ${res.status} - ${errorText}`);
        }

        return res.json() as Promise<T>;
    } catch (err) {
        console.error("API error:", err);
        throw err;
    }
}
