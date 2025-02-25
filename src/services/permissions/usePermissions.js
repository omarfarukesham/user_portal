import { ENDPOINTS } from '@/configuration/endpoints';
import AppPermissions from '@/model/AppPermissions';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import permissionsService from './permissionsService';

export const useGetPermissions = (filters, queryConfig) => {
  return useQuery({
    queryKey: [ENDPOINTS.permissions, JSON.stringify(filters)],
    queryFn: () => permissionsService.getPermissions(filters),
    select: (response) =>
      new PaginatedResponse(response.data?.data, AppPermissions),
    ...queryConfig,
  });
};

export const useGetPermission = (id) => {
  return useQuery({
    queryKey: [ENDPOINTS.permission(id)],
    queryFn: () => permissionsService.getPermission(id),
    select: (response) => new AppPermissions(response.data?.data?.content[0]),
  });
};

export const useAddPermission = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.permissions],
    mutationFn: permissionsService.addPermission,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.permissions] });
    },
  });
};

export const useEditPermission = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.permission(undefined)],
    mutationFn: permissionsService.editPermission,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.editPermission(payload.id)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.permissions] });
    },
  });
};
