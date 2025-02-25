import { ENDPOINTS } from '@/configuration/endpoints';
import AppUserRoles from '@/model/AppUserRoles';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import rolesService from './rolesService';

export const useGetRoles = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.userRoles, JSON.stringify(filters)],
    queryFn: () => rolesService.getRoles(filters),
    select: (response) =>
      new PaginatedResponse(response.data?.data, AppUserRoles),
  });
};

export const useGetRole = (id) => {
  // console.log(id);
  return useQuery({
    queryKey: [ENDPOINTS.userRole(id)],
    queryFn: () => rolesService.getRole(id),
    select: (response) => new AppUserRoles(response.data?.data?.content[0]),
  });
};

export const useAddRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.userRoles],
    mutationFn: rolesService.addRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.userRoles] });
    },
  });
};

export const useEditRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.editUserRole(undefined)],
    mutationFn: rolesService.editRole,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.userRole(payload.id)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.userRoles] });
    },
  });
};
