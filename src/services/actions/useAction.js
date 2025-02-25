import { ENDPOINTS } from '@/configuration/endpoints';
// import AppActions from '@/model/AppUser';
import AppActions from '@/model/AppActions';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import actionsService from './actionsService';
// import userService from './rolesService';

export const useGetActions = (filters, queryConfig) => {
  return useQuery({
    queryKey: [ENDPOINTS.actions, JSON.stringify(filters)],
    queryFn: () => actionsService.getActions(filters),
    select: (response) =>
      new PaginatedResponse(response.data?.data, AppActions),
    ...queryConfig,
  });
};

export const useGetAction = (id) => {
  // console.log(id);
  return useQuery({
    queryKey: [ENDPOINTS.action(id)],
    queryFn: () => actionsService.getAction(id),
    // select: (response) => console.log(response.data.data.content[0]),
    select: (response) => new AppActions(response.data?.data?.content[0]),
  });
};

export const useAddAction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.addAction],
    mutationFn: actionsService.addAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.actions] });
    },
  });
};

export const useEditAction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.editAction(undefined)],
    mutationFn: actionsService.editAction,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.action(payload.id)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.actions] });
    },
  });
};
