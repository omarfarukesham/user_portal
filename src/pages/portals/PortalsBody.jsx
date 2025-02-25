import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import useQueryParamState from '@/hooks/useQueryParamState';
import { useGetPortals } from '@/services/portals/usePortals';
import { useEffect } from 'react';
import PortalsFilters from './PortalsFilters';
import PortalsFiltersModal from './PortalsFiltersModal';
import PortalsTable from './PortalsTable';

const PortalsBody = () => {
  const defaultFilters = {
    perPage: 10,
    page: 1,
  };
  const [filters, setFilters] = useQueryParamState(defaultFilters);
  const { data, error, isFetching, refetch } = useGetPortals(filters);

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
      <PortalsFilters
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
        applyFilters={applyFilters}
        clearFilters={clearFilters}
      />

      {isFetching && <LoadingSpinner text='Loading Portals...' />}
      {!isFetching && data && !error && <PortalsTable data={data?.items} />}
      {!isFetching && error && <PageError message={error.message} />}

      <PortalsFiltersModal
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
      />
    </PageInnerContainer>
  );
};

export default PortalsBody;
