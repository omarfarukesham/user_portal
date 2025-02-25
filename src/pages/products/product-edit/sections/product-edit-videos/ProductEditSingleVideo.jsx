import FormInput from '@/components/form/FormInput';
import FormSwitch from '@/components/form/FormSwitch';
import FormTextarea from '@/components/form/FormTextarea';
import TableData from '@/components/table/TableData';
import TableRow from '@/components/table/TableRow';

const ProductEditSingleVideo = ({ video, index }) => {
  return (
    <TableRow>
      <TableData className='text-label align-top grid gap-3'>
        <video className='h-[300px]' controls>
          <source src={`${video.url}`} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <FormInput name={`videos[${index}].title`} label='Title' />
        <FormInput name={`videos[${index}].altText`} label='Alt Text' />
        <FormTextarea
          name={`videos[${index}].metaDescription`}
          label='Meta Description'
        />
        <FormInput name={`videos[${index}].position`} label='Position' />
        <FormSwitch name={`videos[${index}].isPrimary`} label='Is Primary' />
      </TableData>
    </TableRow>
  );
};

export default ProductEditSingleVideo;
