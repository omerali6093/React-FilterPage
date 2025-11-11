import React from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard";
import { products } from "./data/product";


function App() {
    return (
        <div className="">
            <div className="mx-auto w-[1500px]">
                < Header />
            </div>

            <div className="border-b-1 border-gray-300 w-full mt-2"></div>


            <div className="mx-auto w-[1500px] mt-10  grid grid-cols-12 gap-4">

                <div className="category-filter-section p-5 border shadow-md border-gray-100 col-span-2">
                    < CategoryFilter />
                </div>

                <div className="product-section col-span-10 overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 overflow-hidden">
                        {products.map((product, index) =>
                            <ProductCard key={index} product={product} />
                        )}
                    </div>
                </div>

            </div>

        </div>
    )
}


export default App;