import React from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import { useState } from "react";
import Products from "./components/Products";
import { getVisibleProducts } from "./data/product-filter";


function App() {

    const [selectedCategory, setSelectedCategory] = useState("Laptops");

    const filterProducts = getVisibleProducts(selectedCategory);

    console.log("Filtered-Products =>", filterProducts);
    



    

    return (
        <div>
            <div className="mx-auto w-[1500px]">
                < Header />
            </div>

            <div className="border-b-1 border-gray-300 w-full mt-2"></div>


            <div className="mx-auto w-[1500px] mt-10  grid grid-cols-12 gap-4">

                <div className="category-filter-section p-5 border shadow-md border-gray-100 col-span-2">
                    < CategoryFilter />
                </div>

                <div className="product-section col-span-10 overflow-hidden">
                    < Products  product={filterProducts}/>
                </div>

            </div>

        </div>
    )
}


export default App;