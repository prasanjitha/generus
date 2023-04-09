import client from './WdClient';
import Cache from '../utility/Cache';
import apiClient from './WdClient';

const endPoint = '/posts';

const getListings = () => client.get(endPoint);

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);
    if (response.ok) {
        Cache.store(url, response.data);
        return response;
    }

    const data = await Cache.get(url);
    return data ? { ok: true, data } : response;
};

export default {
    getListings,
}