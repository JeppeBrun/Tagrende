import { shopifyProducts } from '@/lib/shopify/data';

const parseProducts = () => {
  const productsByHandle = {};

  let currentProductData = {};

  shopifyProducts.forEach(row => {
    if (row.Handle) {
      if (row.Title) {
        currentProductData = {
          title: row.Title,
          body: row['Body (HTML)'],
          vendor: row.Vendor,
          type: row.Type,
          tags: row.Tags,
          published: row.Published === 'true',
          status: row.Status,
        };
      }

      if (!productsByHandle[row.Handle]) {
        productsByHandle[row.Handle] = {
          id: row.Handle,
          name: currentProductData.title,
          description: currentProductData.body,
          shopifyId: null,
          variants: [],
          images: [],
        };
      }

      const product = productsByHandle[row.Handle];

      if (row['Variant Price']) {
        product.variants.push({
          sku: row['Variant SKU'],
          price: parseFloat(row['Variant Price']),
          size: row['Option1 Value'],
          color: row['Option2 Value'],
          image: row['Variant Image'],
        });
      }

      if (row['Image Src'] && !product.images.some(img => img.src === row['Image Src'])) {
        product.images.push({
          src: row['Image Src'],
          alt: row['Image Alt Text'],
          position: parseInt(row['Image Position'], 10),
        });
      }
    }
  });

  return Object.values(productsByHandle).map(product => {
    product.images.sort((a, b) => a.position - b.position);
    if (product.variants.length > 0) {
      const firstSku = product.variants[0].sku;
      if (firstSku) {
        const shopifyId = atobSafe(firstSku);
        if (shopifyId && shopifyId.includes('gid://shopify/Product/')) {
          product.shopifyId = shopifyId;
        }
      }
    }
    return product;
  });
};

const atobSafe = (str) => {
  try {
    return atob(str);
  } catch (e) {
    return null;
  }
};

let cachedProducts = null;

export const getShopifyProducts = async () => {
  if (cachedProducts) {
    return cachedProducts;
  }
  cachedProducts = parseProducts();
  return cachedProducts;
};

export const getProductByHandle = async (handle) => {
  const products = await getShopifyProducts();
  return products.find(p => p.id === handle);
};