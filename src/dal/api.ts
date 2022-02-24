import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});
export type LoginParamsType = {
  email: string;
  password: string;
};

export const UserApi = {
  login() {
    return instance.post<LoginParamsType>('user/login');
  },
};
