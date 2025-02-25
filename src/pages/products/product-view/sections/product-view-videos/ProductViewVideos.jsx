import VideoIcon from '@/assets/icons/VideoIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import ProductViewSingleVideo from './ProductViewSingleVideo';

const ProductViewVideos = () => {
  const { data } = useDataContext();
  const videos = data?.product?.videos || [];

  return (
    <CollapsibleSection
      icon={VideoIcon}
      title='Videos'
      isCollapsible={false}
      className='m-10 my-5'
    >
      <Table className='border border-gray-3 border-separate'>
        <TableBody>
          {videos.map((video) => (
            <ProductViewSingleVideo key={video.url} video={video} />
          ))}
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default ProductViewVideos;
