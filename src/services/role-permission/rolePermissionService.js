import { USER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: USER_SERVICE_BASE_URL,
};

const rolePermissionService = {
  getRolePermission: (roleId) => {
    return httpService.get(ENDPOINTS.rolePermissionByRoleId(roleId), {
      ...config,
    });
  },

  createRolePermission: (data) => {
    return httpService.post(ENDPOINTS.rolePermissions, data, {
      ...config,
    });
  },

  updateRolePermission: (data) => {
    return httpService.patch(ENDPOINTS.rolePermission(data.id), data, {
      ...config,
    });
  },
};

export default rolePermissionService;
