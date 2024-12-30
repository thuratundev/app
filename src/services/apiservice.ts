import axios, { AxiosResponse } from 'axios';
import { User } from '../models/user';

const apiService = {
    get: async (url: string): Promise<User[]> => {
        try {
            const response: AxiosResponse = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    },

    post: async (url: string, payload: any): Promise<User> => {
        try {
            const response: AxiosResponse = await axios.post(url, payload);
            return response.data;
        } catch (error) {
            throw new Error(`Error posting data: ${error}`);
        }
    },

    // Add other HTTP methods (put, delete, etc.) as needed
};

export { apiService };