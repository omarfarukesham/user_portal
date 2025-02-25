import Button from '@/components/ui/Button';
import Modal from '../Modal';

const ConfirmationModal = ({
  isOpen,
  setIsOpen,
  title = 'Are you sure?',
  onAccept = () => null,
  onReject = () => null,
}) => {
  const handleAccept = () => {
    onAccept();
    setIsOpen(false);
  };

  const handleReject = () => {
    onReject();
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      showCloseButton={false}
      className='max-w-[300px] p-5 grid gap-5'
    >
      <div className='text-center'>{title}</div>
      <div className='flex gap-3 justify-center'>
        <Button className='flex-1' size='slim' onClick={handleAccept}>
          Yes
        </Button>
        <Button
          className='flex-1'
          variant='secondary'
          size='slim'
          onClick={handleReject}
        >
          No
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
