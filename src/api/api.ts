import { QueryClient } from "@tanstack/react-query";

export const api = (url: string, options?: RequestInit) =>
  fetch("http://localhost:8080" + url, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  }).then(async (response) => {
    if (!response.ok) return Promise.reject(await response.json());
    try {
      return response.json();
    } catch (error) {
      return Promise.resolve({});
    }
  });

export const client = new QueryClient();
