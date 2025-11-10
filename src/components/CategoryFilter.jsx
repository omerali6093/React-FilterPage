


const CategoryFilter = () => {
    return (

        <div className="category-filter">

            <div className="top-section flex items-center justify-between">
                <h1>Filters</h1>
                <span>Clear All</span>
            </div>

            <div className="categories">
                <h1>Categories</h1>
                <div className="category-title">
                    <div className="checkbox flex items-center gap-2">
                        <input type="checkbox" />
                        <p>Laptops</p>
                    </div>
                </div>

            </div>

        </div>

    )
}


export default CategoryFilter;