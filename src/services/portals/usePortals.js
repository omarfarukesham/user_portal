import { ENDPOINTS } from '@/configuration/endpoints';
import AppPortals from '@/model/AppPortals';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import portalService from './portalsService';

export const useGetPortals = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.portals, JSON.stringify(filters)],
    queryFn: () => portalService.getPortals(filters),
    select: (response) =>
      new PaginatedResponse(response.data?.data, AppPortals),
  });
};

export const useGetPortal = (id) => {
  return useQuery({
    queryKey: [ENDPOINTS.portal(id)],
    queryFn: () => portalService.getPortal(id),
    select: (response) => new AppPortals(response.data?.data?.content[0]),
  });
};

export const useAddPortal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.portals],
    mutationFn: portalService.addPortal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.portals] });
    },
  });
};

export const useEditPortal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.portal(undefined)],
    mutationFn: portalService.editPortal,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.editPortal(payload.id)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.portal] });
    },
  });
};
