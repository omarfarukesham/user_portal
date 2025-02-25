import { USER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: USER_SERVICE_BASE_URL,
};

const actionsService = {
  getActions: (filters) => {
    return httpService.get(ENDPOINTS.actions, {
      ...config,
      params: {
        ...filters,
        // userType: 'ADMIN',
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },

  getAction: (id) => {
    return httpService.get(ENDPOINTS.action(id), {
      ...config,
    });
  },

  addAction: (data) => {
    return httpService.post(ENDPOINTS.actions, data, {
      ...config,
    });
  },

  editAction: (data) => {
    return httpService.patch(ENDPOINTS.action(data.id), data, {
      ...config,
    });
  },
};

export default actionsService;
