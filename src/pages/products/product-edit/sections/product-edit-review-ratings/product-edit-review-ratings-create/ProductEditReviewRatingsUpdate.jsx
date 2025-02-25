import StarIconEmpty from '@/assets/icons/StarIconEmpty';
import StarIconFull from '@/assets/icons/StarIconFull';
import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormTextarea from '@/components/form/FormTextarea';
import FormUploadContentService from '@/components/form/FormUploadContentService';
import PageError from '@/components/layout/PageError';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useDirectUploadContent } from '@/services/content/contentService';
import { useEditProductReview } from '@/services/product/productReviewService';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProductEditReviewRatingsUpdate = ({ isOpen, setIsOpen, item }) => {
  // eslint-disable-next-line no-unused-vars
  const [hoveredRating, setHoveredRating] = useState(null);
  const [selectedRating, setSelectedRating] = useState(item.rating);
  const { isLoading, error, mutate } = useEditProductReview();

  const handleEditReviewRatings = (data) => {
    const formData = {
      ...data,
      rating: selectedRating || 0,
    };

    mutate(formData, {
      onSuccess: () => {
        toast.success('Successfully updated');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className='flex flex-col p-6 '>
      <Form
        className='grid gap-5'
        onSubmit={handleEditReviewRatings}
        defaultValues={item}
      >
        <div className='grid gap-5'>
          <p className='mb-4 text-lg font-bold'>Edit Review</p>
          <FormInput
            name='customerInfo.personName'
            label='Customer Name'
            validations={{ required: 'Please Write reason' }}
          />
          <div className='flex-1'>
            <FormUploadContentService
              name='customerInfo.profileImage.url'
              label='Profile Image'
              className='w-40 h-24'
              restServiceHook={useDirectUploadContent}
              restData={{ fileType: 'REVIEW_USER_IMAGE' }}
            />
          </div>
          <div className=''>
            <p className=''>Select Product Rating</p>
            <div className='flex gap-1'>
              {[1, 2, 3, 4, 5].map((index) => (
                <span
                  key={index}
                  onMouseEnter={() => setHoveredRating(index)}
                  onMouseLeave={() => setHoveredRating(null)}
                  onClick={() => setSelectedRating(index)}
                >
                  {index <= selectedRating ? (
                    <StarIconFull className='h-8 fill-secondary' />
                  ) : (
                    <StarIconEmpty className='h-8 fill-secondary' />
                  )}
                </span>
              ))}
            </div>
          </div>

          <FormTextarea name='review' label='Comment' />

          <FormUploadContentService
            name='images[0].url'
            label='Product Image'
            type='image'
            className='w-50 h-20'
            restServiceHook={useDirectUploadContent}
            restData={{ fileType: 'REVIEW_PRODUCT_IMAGE' }}
          />
          {error && <PageError message={error.message} />}
        </div>
        <div className='flex justify-center gap-5'>
          {isLoading && <LoadingSpinner text='Updating Review' />}

          <>
            <div className='flex justify-center gap-3 mt-5'>
              <Button type='submit' size='slim'>
                Submit
              </Button>
            </div>
            <div className='flex justify-center gap-3 mt-5'>
              <Button type='submit' onClick={closeModal} size='slim'>
                Cancel
              </Button>
            </div>
          </>
        </div>
      </Form>
    </Modal>
  );
};

export default ProductEditReviewRatingsUpdate;
