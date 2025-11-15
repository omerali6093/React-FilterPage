import { products } from "./product"

export const getVisibleProducts = (categories, ratingFilter) => {


   return products.filter((product) => {

      if(categories.length > 0 && !categories.includes(product.category)) {
         return false;
      }

      if(ratingFilter !== null && product.rating < ratingFilter) {
         return false;
      }


      return true;

   })


   // if (categories.length === 0) return products;

   // const filterProducts = products.filter((product) => categories.includes(product.category));
   

   // return filterProducts, ratingFilter;
}