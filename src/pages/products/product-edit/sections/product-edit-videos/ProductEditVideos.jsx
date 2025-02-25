import VideoIcon from '@/assets/icons/VideoIcon';
import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import { useUpdateProduct } from '@/services/product/productService';
import { toast } from 'react-toastify';
import ProductEditSingleVideo from './ProductEditSingleVideo';

const ProductEditVideos = () => {
  const { data } = useDataContext();
  const { isLoading, error, mutate } = useUpdateProduct();

  const handleEdit = (formData) => {
    mutate(formData, {
      onSuccess: () => {
        toast.success('Successfully updated');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const defaultValues = {
    id: data?.product?.id,
    videos: data?.product?.videos,
  };
  return (
    <CollapsibleSection
      icon={VideoIcon}
      title='Videos'
      isCollapsible={false}
      className='m-10 my-5'
    >
      <Form
        defaultValues={defaultValues}
        onSubmit={handleEdit}
        className='grid gap-5'
      >
        <Table className='border border-gray-3 border-separate'>
          <TableBody>
            {defaultValues.videos.map((video, index) => (
              <ProductEditSingleVideo
                key={video.url}
                video={video}
                index={index}
              />
            ))}
          </TableBody>
        </Table>

        <div className='flex justify-center'>
          <Button variant='secondary' loading={isLoading} type='submit'>
            Update
          </Button>
        </div>
        <PageError message={error?.message} />
      </Form>
    </CollapsibleSection>
  );
};

export default ProductEditVideos;
