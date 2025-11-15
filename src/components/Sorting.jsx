const Sorting = ( {setSortOption} ) => {

    return (
        <div class="w-full flex justify-end ">
            <select 
            id="sorting"
            onChange={(e) => setSortOption(e.target.value)}
            className="block w-[230px] px-2 py-2 bg-neutral-secondary-medium outline-none 
            border border-gray-400 rounded-md  shadow-xs placeholder:text-body">
                <option value="price-low-high">Price: Low to high</option>
                <option value="price-high-low">Price: High to low</option>
                <option value="rating-low-high">Rating: Low to high</option>
                <option value="rating-high-low">Rating: High to low</option>
            </select>
        </div>

    )

}



export default Sorting;