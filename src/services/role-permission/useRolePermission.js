import { ENDPOINTS } from '@/configuration/endpoints';
import AppRolePermissions from '@/model/AppRolePermissions';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import rolePermissionService from './rolePermissionService';

export const useGetRolePermission = (roleId) => {
  return useQuery({
    queryKey: [ENDPOINTS.rolePermissionByRoleId(roleId)],
    queryFn: () => rolePermissionService.getRolePermission(roleId),
    select: (response) =>
      new AppRolePermissions(response.data?.data?.content[0]),
  });
};

export const useCreateRolePermission = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.rolePermissions],
    mutationFn: rolePermissionService.createRolePermission,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.rolePermissionByRoleId(payload.roleId)],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateRolePermission = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: [ENDPOINTS.rolePermission(id)],
    mutationFn: rolePermissionService.updateRolePermission,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.rolePermissionByRoleId(payload.roleId)],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
