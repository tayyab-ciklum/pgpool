import axios from 'axios';
import Config from '.';

const { BASE_URL } = Config;
const client = axios.create({
    responseType: 'json',
    baseURL: BASE_URL,
    transformResponse: (response) => response,
});

client.defaults.headers.post['Content-Type'] = 'application/json';
client.defaults.headers.post.Accept = 'application/json';
client.defaults.headers.pragma = 'no-cache';
client.defaults.timeout = 60000;

const request = (options) => {
    const onSuccess = (response) => {
        try {
            if (typeof response.data === 'string') return JSON.parse(response.data);
            else return response.data;
        } catch (err) {
            return response.data;
        }
    };

    const onFailure = (error) => {
        return Promise.reject(error);
    };

    return client(options).then(onSuccess).catch(onFailure);
};

export default request;
