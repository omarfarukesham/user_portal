import InfoIcon from '@/assets/icons/InfoIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';

const ProductViewSEO = () => {
  const { data } = useDataContext();
  const seoInfo = data?.product?.seoInfo || {};

  return (
    <CollapsibleSection
      icon={InfoIcon}
      title='SEO'
      isCollapsible={false}
      className='m-10 my-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          <TableRow>
            <TableHead>URL Key</TableHead>
            <TableData>{seoInfo?.urlKey || 'No Data Found'}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Meta Title</TableHead>
            <TableData>{seoInfo?.metaTitle || 'No Data Found'}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Meta Keywords</TableHead>
            <TableData>{seoInfo?.metaKeywords || 'No Data Found'}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Meta Description</TableHead>
            <TableData>{seoInfo?.metaDescription || 'No Data Found'}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Meta Robot Rules</TableHead>
            <TableData>{seoInfo?.metaRobotRule || 'No Data Found'}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Cross Domain Market Code</TableHead>
            <TableData>
              {seoInfo?.crossDomainMarketCode || 'No Data Found'}
            </TableData>
          </TableRow>
          <TableRow>
            <TableHead>Cross Domain URL</TableHead>
            <TableData>{seoInfo?.crossDomainUrl || 'No Data Found'}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Canonical URL</TableHead>
            <TableData>{seoInfo?.canonicalUrl || 'No Data Found'}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Open Graph Image URL</TableHead>
            <TableData>
              {seoInfo?.openGraphImageUrl || 'No Data Found'}
            </TableData>
          </TableRow>
          <TableRow>
            <TableHead>Include in HTML Map</TableHead>
            <TableData>
              {seoInfo?.isIncludeInHtmlMap.toString() || 'No Data Found'}
            </TableData>
          </TableRow>
          <TableRow>
            <TableHead>Use in Cross Linking</TableHead>
            <TableData>
              {seoInfo?.isUseInCrossLinking.toString() || 'No Data Found'}
            </TableData>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default ProductViewSEO;
