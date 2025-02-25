import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import useQueryParamState from '@/hooks/useQueryParamState';
import { useGetPermissions } from '@/services/permissions/usePermissions';
import { useEffect } from 'react';
import PermissionsFilters from './PermissionsFilters';
import PermissionsFiltersModal from './PermissionsFiltersModal';
import PermissionsTable from './PermissionsTable';

const PermissionsBody = () => {
  const defaultFilters = {
    perPage: 10,
    page: 1,
  };
  const [filters, setFilters] = useQueryParamState(defaultFilters);
  const { data, error, isFetching, refetch } = useGetPermissions(filters);

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
      <PermissionsFilters
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
        applyFilters={applyFilters}
        clearFilters={clearFilters}
      />

      {isFetching && <LoadingSpinner text='Loading Permission...' />}
      {!isFetching && data && !error && <PermissionsTable data={data?.items} />}
      {!isFetching && error && <PageError message={error.message} />}

      <PermissionsFiltersModal
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
      />
    </PageInnerContainer>
  );
};

export default PermissionsBody;
