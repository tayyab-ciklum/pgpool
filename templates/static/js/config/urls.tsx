import Config from '../config';
const { BASE_URL } = Config;

export const userApi = {
    getUser: (userId: string): string => `${BASE_URL}/User/Detail?Id=${userId}`,
};
