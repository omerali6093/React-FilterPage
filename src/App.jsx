import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import { useState } from "react";
import Products from "./components/Products";
import { getVisibleProducts } from "./data/product-filter";
import RatingFilter from "./components/RatingFilter";
import PriceRange from "./components/PriceRange";
import Sorting from "./components/Sorting";


function App() {

    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedRating, setSelectedRating] = useState(null);
    const [sortOption, setSortOption] = useState("");
    

    const filterProducts = getVisibleProducts(selectedCategory, selectedRating);

    const onchangeCategoryHandler = (category, isChecked) => {
        setSelectedCategory(
            isChecked 
            ? [...selectedCategory, category]
            : selectedCategory.filter((cat) => cat !== category)
        )
    }

    const onchangeRatingHandler = (rating) => {
        if(selectedRating === rating) {
            setSelectedRating(null);
        } else {
            setSelectedRating(rating)
        }
    }

    const sortedProducts = [...filterProducts].sort((a, b) => {
        if(sortOption === "price-low-high") return a.price - b.price;
        if(sortOption === "price-high-low") return b.price - a.price;
        if(sortOption === "rating-low-high") return a.rating - b.rating;
        if(sortOption === "rating-high-low") return b.rating - a.rating;
        return 0
    })

    

    

    

    return (
        <div>
            <div className="mx-auto w-[1500px]">
                < Header />
            </div>

            <div className="border-b border-gray-300 w-full mt-2"></div>


            <div className="mx-auto w-[1500px] mt-10  grid grid-cols-12 gap-4">

                <div className="h-[740px] p-5 border shadow-md border-gray-100 col-span-2">

                    <div className="category-filter">
                    < CategoryFilter selectedCategories={selectedCategory} onchangeCategory={onchangeCategoryHandler}/>
                    </div>

                    <div className="border-b border-gray-300 pt-2"></div>

                    <div className="price-range mb-10 mt-5">
                        <h4 className="mb-5 font-semibold">Price Filter</h4>
                        <PriceRange />
                    </div>

                    <div className="border-b border-gray-300 pt-2"></div>
                    <div className="rating-filter mt-5">
                        <h4 className="mb-5 font-semibold">Rating Filter</h4>
                    < RatingFilter onchangeRating={onchangeRatingHandler}/>
                    </div>
                </div>

                <div className="product-section col-span-10 overflow-hidden">

                    <div className="sortingby-section">
                        <Sorting setSortOption={setSortOption}/>
                    </div>

                    <div className="border-b border-gray-200 mt-4"></div>

                    <div className="product-cards-section  mt-6">
                     < Products  product={sortedProducts}/>

                    </div>
                </div>

            </div>

        </div>
    )
}


export default App;