import { categoryTitle } from "../data/category";
import Checkbox from "./Checkbox";

const CategoryFilter = () => {
    return (

        <div className="category-filter">

            <div className="top-section  flex items-center justify-between">
                <h1 className="text-[20px] font-semibold">Filters</h1>
                <p className="text-[14px] text-[#38a9fa] font-medium cursor-pointer">Clear All</p>
            </div>

            <div className="categories mt-10">
                <h1 className="text-[20px] font-semibold mb-4">Categories</h1>
                <div className="category-title">
                    <div className="checkbox">
                        {categoryTitle.map((category, index) => 
                        <Checkbox key={index} text={category}/>
                        )}
                    </div>
                </div>

            </div>

        </div>

    )
}


export default CategoryFilter;