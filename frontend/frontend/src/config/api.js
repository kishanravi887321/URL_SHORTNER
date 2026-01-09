// API Configuration - Uses environment variables for Vercel deployment
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://short.saksin.online';
export const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL || 'https://urlshortner.saksin.online';

// API Endpoints
export const API_ENDPOINTS = {
  SHORTEN: `${API_BASE_URL}/api/shorten`,
};
