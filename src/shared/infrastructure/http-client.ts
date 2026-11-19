export default class HttpClient {
    constructor(private readonly url: string) {
    }

    async get<T>(path: string): Promise<T> {
        const response = await fetch(`${this.url}/${path}`);
        return await response.json();
    }

    async post<T>(path: string, body: any): Promise<T> {
        const response = await fetch(`${this.url}/${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await response.json();
    }

    async put<T>(path: string, body: any): Promise<T> {
        const response = await fetch(`${this.url}/${path}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await response.json();
    }
}