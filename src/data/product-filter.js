import { products } from "./product"

export const getVisibleProducts = (categories) => {
   const filterProducts = products.filter((product) => categories.includes(product.category))

   return filterProducts;
}