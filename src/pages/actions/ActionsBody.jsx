import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import useQueryParamState from '@/hooks/useQueryParamState';
import { useGetActions } from '@/services/actions/useAction';
import { useEffect } from 'react';
import ActionsFilters from './ActionsFilters';
import ActionsFiltersModal from './ActionsFiltersModal';
import ActionsTable from './ActionsTable';

const ActionsBody = () => {
  const defaultFilters = {
    perPage: 10,
    page: 1,
  };
  const [filters, setFilters] = useQueryParamState(defaultFilters);
  const { data, error, isFetching, refetch } = useGetActions(filters);

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
      <ActionsFilters
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
        applyFilters={applyFilters}
        clearFilters={clearFilters}
      />

      {isFetching && <LoadingSpinner text='Loading Actions...' />}
      {!isFetching && data && !error && <ActionsTable data={data?.items} />}
      {!isFetching && error && <PageError message={error.message} />}

      <ActionsFiltersModal
        onFilterChange={handleFilterChange}
        filters={filters}
        paginate={data?.paginate}
      />
    </PageInnerContainer>
  );
};

export default ActionsBody;
