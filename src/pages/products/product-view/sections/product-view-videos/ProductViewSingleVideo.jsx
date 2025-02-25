import TableData from '@/components/table/TableData';
import TableRow from '@/components/table/TableRow';

const ProductViewSingleVideo = ({ video }) => {
  return (
    <TableRow>
      <TableData className='grid gap-2 text-label'>
        <video className='md:h-[300px]' controls>
          <source src={`${video.url}`} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div>
          <strong>Title: </strong>
          <span>{video.title}</span>
        </div>
        <div>
          <strong>Alt Text: </strong>
          <span>{video.altText}</span>
        </div>
        <div>
          <strong>Meta Description: </strong>
          {video.metaDescription}
        </div>
        <div>
          <strong>Position: </strong>
          {video.position}
        </div>
        <div>
          <strong>Primary: </strong>
          {video.isPrimary ? 'Yes' : 'No'}
        </div>
      </TableData>
    </TableRow>
  );
};

export default ProductViewSingleVideo;
