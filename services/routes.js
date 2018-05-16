import { JOBFAIR_URL } from 'react-native-dotenv';

const API_URL = `${JOBFAIR_URL}/api/v1`;
export const LOGIN_URL = `${API_URL}/sessions`;
export const USERS_URL = `${API_URL}/users/999999`; // because API is great
export const REVIEW_URL = `${API_URL}/user/resume/favorites`;
export const COMPANY_URL = `${API_URL}/user/orders/details`;
