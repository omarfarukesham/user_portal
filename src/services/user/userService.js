import { USER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: USER_SERVICE_BASE_URL,
};

const userService = {
  getUsers: (filters) => {
    return httpService.get(ENDPOINTS.roles, {
      ...config,
      params: {
        ...filters,
        userType: 'ADMIN',
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },

  getUser: (id) => {
    return httpService.get(ENDPOINTS.user(id), {
      ...config,
    });
  },

  addUserInfo: (data) => {
    return httpService.post(ENDPOINTS.addUser, data, {
      ...config,
    });
  },

  editUser: (data) => {
    return httpService.patch(ENDPOINTS.editUser(data.id), data, {
      ...config,
    });
  },

  updatePassword: (data) => {
    return httpService.post(ENDPOINTS.updatePassword, data, {
      ...config,
    });
  },

  // getOrderDetails: (id) => {
  //   return httpService.get(ENDPOINTS.orderDetails(id), {
  //     ...config,
  //   });
  // },
};

export default userService;
