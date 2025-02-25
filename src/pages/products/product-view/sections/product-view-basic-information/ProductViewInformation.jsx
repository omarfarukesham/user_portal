import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import { MARKETPLACE_PDP_URL } from '@/configuration/config';
import { useDataContext } from '@/context/dataContext';
const ProductViewInformation = () => {
  const {
    data: { product },
  } = useDataContext();

  const pdpBaseURL = MARKETPLACE_PDP_URL;

  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        <TableRow>
          <TableHead>Product Slug</TableHead>
          <TableData className='flex flex-wrap items-center'>
            <span className='flex-1'>{product?.productSlug}</span>
            <a
              className='bg-secondary text-primary py-1 px-2 rounded hover:bg-primary hover:text-white'
              href={pdpBaseURL + product?.productSlug}
              target='_blank'
              rel='noreferrer'
            >
              View On Marketplace
            </a>
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Item Id</TableHead>
          <TableData>{product?.itemId}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>SKU</TableHead>
          <TableData>{product?.sku}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>EAN</TableHead>
          <TableData>{product?.ean}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>GTIN</TableHead>
          <TableData>{product?.gtin}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>MPN</TableHead>
          <TableData>{product?.mpn}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>HS Code</TableHead>
          <TableData>{product?.hsCode}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Brand</TableHead>
          <TableData>{product?.brandName}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Seller</TableHead>
          <TableData>{product?.sellerStoreName}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Is Featured</TableHead>
          <TableData>{product?.isFeatured ? 'Yes' : 'No'}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Is Exchangeable</TableHead>
          <TableData>{product?.isExchangeable ? 'Yes' : 'No'}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Is Returnable</TableHead>
          <TableData>{product?.isReturnable ? 'Yes' : 'No'}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Is Refundable</TableHead>
          <TableData>{product?.isRefundable ? 'Yes' : 'No'}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Stock Count</TableHead>
          <TableData>{product?.stockCount}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>In Stock Date</TableHead>
          <TableData>{product?.inStockDate}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Warning Quantity</TableHead>
          <TableData>{product?.warningQuantity}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Standard Quantity</TableHead>
          <TableData>{product?.standardQuantity}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Stock Status</TableHead>
          <TableData>{product?.stockStatus?.replace('_', ' ')}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Package Dimension</TableHead>
          <TableData>
            Unit: {product?.packageDimension.unit} <br />
            Height: {product?.packageDimension.height} <br />
            Width: {product?.packageDimension.width} <br />
            Length: {product?.packageDimension.length} <br />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Package Weight</TableHead>
          <TableData>
            Unit: {product?.packageWeight.unit} <br />
            Weight: {product?.packageWeight.value} <br />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Visibilities</TableHead>
          <TableData>{product?.visibilities?.join(', ')}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Tax Rules</TableHead>
          <TableData>
            {product?.taxRules
              ?.map(
                (t) =>
                  `${t.name} (Type: ${t.taxRateType}, Value: ${t.taxRateValue})`,
              )
              ?.join(', ')}
          </TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ProductViewInformation;
