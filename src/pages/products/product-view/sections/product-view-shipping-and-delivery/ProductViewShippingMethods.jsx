import NoDataFoundTable from '@/components/layout/NoDataFoundTable';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import { useDataContext } from '@/context/dataContext';

const ProductViewShippingMethods = () => {
  const { data } = useDataContext();
  const product = data.product;

  return (
    <div className='grid gap-5'>
      {product?.defaultShippingInfos?.map((shippingInfo, index) => (
        <Table className='border border-separate border-gray-3' key={index}>
          <TableBody>
            <TableRow>
              <TableHead>Market Code</TableHead>
              <TableData>{shippingInfo?.marketCode}</TableData>
            </TableRow>
            <TableRow>
              <TableHead>Shipping Type</TableHead>
              <TableData>{shippingInfo?.shippingType}</TableData>
            </TableRow>
            <TableRow>
              <TableHead>Carrier Name</TableHead>
              <TableData>{shippingInfo?.carrierName}</TableData>
            </TableRow>
            <TableRow>
              <TableHead>Estimated Delivery Time</TableHead>
              <TableData>
                {shippingInfo?.estimatedDeliveryTime?.from} -{' '}
                {shippingInfo?.estimatedDeliveryTime?.from}{' '}
                {shippingInfo?.estimatedDeliveryTime?.unit}
              </TableData>
            </TableRow>
          </TableBody>
        </Table>
      ))}

      {!product.defaultShippingInfos?.length && (
        <NoDataFoundTable message='No shipping is assigned' />
      )}
    </div>
  );
};

export default ProductViewShippingMethods;
