import FormDatePicker from '@/components/form/FormDatePicker';
import FormInput from '@/components/form/FormInput';
import FormSwitch from '@/components/form/FormSwitch';
import FormDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import { useDataContext } from '@/context/dataContext';
import { stockStatuses, visibilities } from '@/services/fake/formData';
import { useGetBrands } from '@/services/product/brandService';
import { useGetSellers } from '@/services/seller/sellerService';
const ProductEditInformation = () => {
  const { data } = useDataContext();
  const product = data.product;

  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        <TableRow>
          <TableHead>Product Slug</TableHead>
          <TableData>{product?.productSlug}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>Item Id</TableHead>
          <TableData>{product?.itemId}</TableData>
        </TableRow>

        <TableRow>
          <TableHead>SKU</TableHead>
          <TableData>
            <FormInput name='sku' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>EAN</TableHead>
          <TableData>
            <FormInput name='ean' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>GTIN</TableHead>
          <TableData>
            <FormInput name='gtin' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>MPN</TableHead>
          <TableData>
            <FormInput name='mpn' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>HS Code</TableHead>
          <TableData>
            <FormInput name='hsCode' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>In Stock Date</TableHead>
          <TableData>
            <FormDatePicker name='inStockDate' placeholder='In Stock Date' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Brand</TableHead>
          <TableData>
            <FormDropdownRest
              name='brandId'
              restServiceHook={useGetBrands}
              placeholder='Select Brand'
              className='bg-white'
            />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Seller</TableHead>
          <TableData>
            <FormDropdownRest
              name='sellerId'
              restServiceHook={useGetSellers}
              labelKey='storeName'
              placeholder='Select Seller'
              className='bg-white'
            />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Is Featured</TableHead>
          <TableData>
            <FormSwitch name='isFeatured' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Is Exchangeable</TableHead>
          <TableData>
            <FormSwitch name='isExchangeable' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Is Returnable</TableHead>
          <TableData>
            <FormSwitch name='isReturnable' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Is Refundable</TableHead>
          <TableData>
            <FormSwitch name='isRefundable' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Stock Count</TableHead>
          <TableData>
            <FormInput name='stockCount' placeholder='Stock Count' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Warning Quantity</TableHead>
          <TableData>
            <FormInput name='warningQuantity' placeholder='Warning Count' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Standard Quantity</TableHead>
          <TableData>
            <FormInput name='standardQuantity' placeholder='Standard Count' />
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Stock Status</TableHead>
          <TableData>
            <FormDropdown
              name='stockStatus'
              options={stockStatuses}
              className='bg-white'
            />
          </TableData>
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
          <TableData>
            <FormDropdown
              name='visibilities'
              options={visibilities}
              isMulti={true}
            />
          </TableData>
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

export default ProductEditInformation;
