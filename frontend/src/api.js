// src/api.js
import axios from 'axios';

// Set the backend API URL
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/bfhl';

// Function to send POST request
export const sendPostRequest = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return { is_success: false, message: 'Request failed' };
  }
};

// Function to send GET request
export const sendGetRequest = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return { is_success: false, message: 'Request failed' };
  }
};
