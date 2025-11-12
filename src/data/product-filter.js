import { products } from "./product"

export const getVisibleProducts = (categories) => {

   if (categories.length === 0) return products;

   const filterProducts = products.filter((product) => categories.includes(product.category))
   return filterProducts;
}