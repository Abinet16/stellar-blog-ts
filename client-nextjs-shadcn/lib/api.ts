import { getToken } from "./auth";

const API_URL = "http://localhost:5000";

export async function apiGet<T>(path: string): Promise<T> {
  const token = getToken();
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return res.json();
}

export async function apiPost<T>(path: string, data: unknown): Promise<T> {
  const token = getToken();
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
