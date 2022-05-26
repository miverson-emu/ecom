import Client from 'shopify-buy';

// https://shopify.github.io/js-buy-sdk/ 
// https://github.com/Shopify/storefront-api-examples

const ShopifyClient = Client.buildClient({
  storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
  domain: 'graphql.myshopify.com'
});

// export const client = Client.buildClient({
//   storefrontAccessToken: '6b6690ca6f89102215d522d5682d1cb2',
//   domain: 'selectsets.myshopify.com'
// });

export const getAllProducts = () => {
	return ShopifyClient.product.fetchAll().then((res) => {
		return res
	})
}


export const getShopInformation = ( ) => {
	return ShopifyClient.shop.fetchInfo().then((res) => {
		return res
	})
}

export default ShopifyClient;