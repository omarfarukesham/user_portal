import { USER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: USER_SERVICE_BASE_URL,
};

const portalService = {
  getPortals: (filters) => {
    return httpService.get(ENDPOINTS.portals, {
      ...config,
      params: {
        ...filters,
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },

  getPortal: (id) => {
    return httpService.get(ENDPOINTS.portal(id), {
      ...config,
    });
  },

  addPortal: (data) => {
    return httpService.post(ENDPOINTS.portals, data, {
      ...config,
    });
  },

  editPortal: (data) => {
    return httpService.patch(ENDPOINTS.portal(data.id), data, {
      ...config,
    });
  },
};

export default portalService;
