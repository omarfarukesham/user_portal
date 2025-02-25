import Modal from '@/components/modal/Modal';

const EditForm = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-10 p-10'
    >
      <h1>Hello world</h1>
    </Modal>
  );
};

export default EditForm;
