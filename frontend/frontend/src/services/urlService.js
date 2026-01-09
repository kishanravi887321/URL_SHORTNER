import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

/**
 * Create a shortened URL
 * @param {string} originalUrl - The original URL to shorten
 * @param {string} prefix - Optional prefix for custom domain
 * @returns {Promise<{shortUrl: string, shortCode: string}>}
 */
export const createShortUrl = async (originalUrl, prefix = '') => {
  try {
    const response = await axios.post(API_ENDPOINTS.SHORTEN, {
      originalUrl,
      prefix: prefix || undefined,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to shorten URL');
    }
    throw new Error('Network error. Please try again.');
  }
};

/**
 * Validate if a string is a valid URL
 * @param {string} url - The URL to validate
 * @returns {boolean}
 */
export const isValidUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};
