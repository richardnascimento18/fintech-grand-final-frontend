export async function fetchHelper(endpoint: string, options?: RequestInit) {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASEURL || "http://localhost:8080/api/v1";
    const url = `${baseUrl}${endpoint}`;

    const response = await fetch(url, options);

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Request failed with status ${response.status}: ${errorBody}`);
    }

    return response.json();
}
