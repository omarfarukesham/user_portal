import { ENDPOINTS } from '@/configuration/endpoints';
// import Order from '@/model/Order';
import AppUser from '@/model/AppUser';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import userService from './userService';
// import orderService from './orderService';

export const useUsers = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.roles, JSON.stringify(filters)],
    queryFn: () => userService.getUsers(filters),
    select: (response) => new PaginatedResponse(response.data?.data, AppUser),
  });
};

export const useGetUser = (id) => {
  // console.log(id);
  return useQuery({
    queryKey: [ENDPOINTS.user(id)],
    queryFn: () => userService.getUser(id),
    select: (response) => new AppUser(response.data?.data?.content[0]),
  });
};

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.addUser],
    mutationFn: userService.addUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.roles] });
    },
  });
};

export const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.editUser(undefined)],
    mutationFn: userService.editUser,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.user(payload.id)] });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.roles] });
    },
  });
};

export const useUpdateUserPassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.updatePassword],
    mutationFn: userService.updatePassword,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.roles] });
    },
  });
};
