import { USER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: USER_SERVICE_BASE_URL,
};

const permissionsService = {
  getPermissions: (filters) => {
    return httpService.get(ENDPOINTS.permissions, {
      ...config,
      params: {
        ...filters,
        // userType: 'ADMIN',
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },

  getPermission: (id) => {
    return httpService.get(ENDPOINTS.permission(id), {
      ...config,
    });
  },

  addPermission: (data) => {
    return httpService.post(ENDPOINTS.permissions, data, {
      ...config,
    });
  },

  editPermission: (data) => {
    return httpService.patch(ENDPOINTS.permission(data.id), data, {
      ...config,
    });
  },
};

export default permissionsService;
