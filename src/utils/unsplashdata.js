// src/utils/unsplash.js
import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = "v6nOgRLQzCZkQfjncxUH44mtPr-CRujVF4Ly43W0LKE";

const fetchImages = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/photos/random`, {
      params: {
        query: query,
        count: 30, 
        client_id: ACCESS_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    return [];
  }
};

export default fetchImages;
