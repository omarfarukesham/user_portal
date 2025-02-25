const NoDataFound = ({ className, message = 'No Data Found' }) => {
  return (
    <div
      className={`h-full flex justify-center items-center p-3 text-label text-gray-8 ${className}`}
    >
      {message}
    </div>
  );
};

export default NoDataFound;
