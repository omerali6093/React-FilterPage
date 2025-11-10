import React from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard";



function App() {
    return (
        <div className="">
            <div className="mx-auto w-[1500px]">
           < Header />
            </div>

            <div className="border-b-1 border-gray-300 w-full mt-2"></div>


            <div className="mx-auto w-[1500px] mt-10 border grid grid-cols-12 gap-6">

                <div className="category-filter-section border border-red-600 col-span-2">
                < CategoryFilter />
                </div>

                <div className="product-section border border-green-500 col-span-10">
                    < ProductCard />
                </div>
            
            </div>

        </div>
    )
}


export default App;