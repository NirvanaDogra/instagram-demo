
const BASE_URL = "https://dummyjson.com/";
const DEFAULT_ERROR = "API request failed"
const defaultHeaders = {
  "Content-Type": "application/json",
};

const ApiConfig = async (endpoint, { method = "GET", headers = {}, body = null, query = null } = {}) => {
    const config =  {
        method,
        headers: {...defaultHeaders, ...headers}
    }

    if (query && Object.keys(query).length > 0) {
        const searchParams = new URLSearchParams(query);
        endpoint += `?${searchParams.toString()}`;
    }

    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config)
        if(!response.ok) {
            const errorData = await response.json().catch(() => {})
            throw new Error(errorData.message || DEFAULT_ERROR)
        }
        return await response.json()
    } catch (err) {
        console.error("API error:", err.message)
        throw err
    }
}

export default ApiConfig
