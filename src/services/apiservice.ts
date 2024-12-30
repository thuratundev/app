import axios, { AxiosResponse } from 'axios';

 interface ApiResponse {
    id: number;
    firstname: string;
    lastname: string;
    email:string;
    birthDate: string;
    login: {
        uuid: string;
        username: string;
        password: string;
        md5: string;
        sha1: string;
        registered: string;
    };
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const apiService = {
    get: async (url: string): Promise<ApiResponse[]> => {
        try {
            const response: AxiosResponse = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`);
        }
    },

    post: async (url: string, payload: any): Promise<ApiResponse[]> => {
        try {
            const response: AxiosResponse = await axios.post(url, payload);
            return response.data;
        } catch (error) {
            throw new Error(`Error posting data: ${error}`);
        }
    },

    // Add other HTTP methods (put, delete, etc.) as needed
};

export { apiService, ApiResponse };