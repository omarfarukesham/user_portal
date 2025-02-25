/**
 * As we are doing patch for product basic information
 * So for the basic information form's default value, setting data needed
 */

export default function getProductBasicInformation(product) {
  return {
    id: product.id,
    publishStatuses: { ...product?.publishStatuses },
    titles: product.titles,
    sku: product.sku,
    ean: product.ean,
    gtin: product.gtin,
    mpn: product.mpn,
    hsCode: product.hsCode,

    inStockDate: product.inStockDate,
    brandId: product.brandId,
    sellerId: product.sellerId,
    isFeatured: product.isFeatured,
    isExchangeable: product.isExchangeable,
    isReturnable: product.isReturnable,
    isRefundable: product.isRefundable,

    stockCount: product.stockCount,
    warningQuantity: product.warningQuantity,
    standardQuantity: product.standardQuantity,
    stockStatus: product.stockStatus,

    visibilities: product.visibilities,
  };
}
