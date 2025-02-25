const StarIconHalf = ({ className }) => {
  return (
    <svg
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      className={className || 'fill-secondary'}
    >
      <path
        d='M12.0001 14.925L15.1501 16.85L14.3251 13.25L17.1001 10.85L13.4501 10.525L12.0001 7.125V14.925ZM7.32508 18.9231L8.56546 13.6096L4.44238 10.0385L9.87316 9.5673L12.0001 4.55768L14.127 9.5673L19.5578 10.0385L15.4347 13.6096L16.6751 18.9231L12.0001 16.1019L7.32508 18.9231Z'
        fill='inherit'
      />
    </svg>
  );
};

export default StarIconHalf;
