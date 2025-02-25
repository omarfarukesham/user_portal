import { USER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: USER_SERVICE_BASE_URL,
};

const rolesService = {
  getRoles: (filters) => {
    return httpService.get(ENDPOINTS.userRoles, {
      ...config,
      params: {
        ...filters,
        // userType: 'ADMIN',
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },

  getRole: (id) => {
    return httpService.get(ENDPOINTS.userRole(id), {
      ...config,
    });
  },

  addRole: (data) => {
    return httpService.post(ENDPOINTS.userRoles, data, {
      ...config,
    });
  },

  editRole: (data) => {
    return httpService.patch(ENDPOINTS.editUserRole(data.id), data, {
      ...config,
    });
  },
};

export default rolesService;
