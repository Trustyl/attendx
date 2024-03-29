export const SOCKET_URL = "http://localhost:3000/";

export function FETCH(route = "/api", method = "GET", token = null, body = null) {
    const authHeader = { 'Authorization': `BEARER ${token}` };
    const linkHeaders = {
        "GET": { headers: { ...authHeader } },
        "POST": {
            method: "POST",
            headers: {
                ...authHeader,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
    return fetch(`${SOCKET_URL}api${route}`, linkHeaders[method]).then(res => res.json());
}