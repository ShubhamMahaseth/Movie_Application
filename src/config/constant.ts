// Base URL
export const BASE_URL = "https://api.themoviedb.org/3";

// API access token
export const ACCESS_TOKEN = import.meta.env.VITE_APP_API_ACCESS_TOKEN;

// Header
export const HEADER = {
  Authorization: `bearer ${ACCESS_TOKEN}`,
};
