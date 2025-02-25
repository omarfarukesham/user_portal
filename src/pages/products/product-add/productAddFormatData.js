import removeEmptyKeys from '@/utilities/removeEmptyKeys';

/**
 * Helps to convert data, so that server can accept it
 * @param {Object} formData - form data of upload product form
 * @returns {Object} formData - backend acceptable formatted data of upload product form
 */
export default function productAddFormatData(formData) {
  const formattedData = {
    ...formData,
    publishStatuses: removeEmptyKeys(formData.publishStatuses, ['INACTIVE']),
  };

  !formattedData?.bannerImage?.url && delete formattedData.bannerImage;

  return formattedData;
}
