import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import useQueryParamState from '@/hooks/useQueryParamState';
// import { useOrders } from '@/services/order/useOrder';
import { useEffect } from 'react';
// import OrdersFilters from './OrdersFilters';
// import OrderFiltersModal from './OrdersFiltersModal';
// import OrdersTable from './OrdersTable';
import { useUsers } from '@/services/user/useUser';
import UserFiltersModal from './UserFiltersModal';
import UsersFilters from './UsersFilters';
import UsersTable from './UsersTable';

const UsersBody = () => {
  const defaultFilters = {
    perPage: 10,
    page: 1,
  };
  const [filters, setFilters] = useQueryParamState(defaultFilters);
  const { data, error, isFetching, refetch } = useUsers(filters);

  useEffect(() => {
    refetch(filters);
  }, [filters, refetch]);

  const handleFilterChange = (newFilters) => {
    setFilters({
      ...filters,
      ...newFilters,
    });
  };

  // Apply the filters
  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  // Clearing the filters
  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <PageInnerContainer className='flex flex-col'>
      <UsersFilters
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
        applyFilters={applyFilters}
        clearFilters={clearFilters}
      />

      {isFetching && <LoadingSpinner text='Loading Users...' />}
      {!isFetching && data && !error && <UsersTable data={data?.items} />}
      {!isFetching && error && <PageError message={error.message} />}

      <UserFiltersModal
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
      />
    </PageInnerContainer>
  );
};

export default UsersBody;
