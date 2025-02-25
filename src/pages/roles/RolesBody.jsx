import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import useQueryParamState from '@/hooks/useQueryParamState';
import { useGetRoles } from '@/services/roles/useRole';
import { useEffect } from 'react';
import RolesFilters from './RolesFilters';
import RolesFiltersModal from './RolesFiltersModal';
import RolesTable from './RolesTable';

const RolesBody = () => {
  const defaultFilters = {
    perPage: 10,
    page: 1,
  };
  const [filters, setFilters] = useQueryParamState(defaultFilters);
  const { data, error, isFetching, refetch } = useGetRoles(filters);

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
      <RolesFilters
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
        applyFilters={applyFilters}
        clearFilters={clearFilters}
      />

      {isFetching && <LoadingSpinner text='Loading User Roles...' />}
      {!isFetching && data && !error && <RolesTable data={data?.items} />}
      {!isFetching && error && <PageError message={error.message} />}

      <RolesFiltersModal
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
      />
    </PageInnerContainer>
  );
};

export default RolesBody;
