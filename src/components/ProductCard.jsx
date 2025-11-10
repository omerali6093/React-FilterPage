const ProductCard = ({product}) => {
    return (

            <div class="w-[300px] rounded-md text-black border border-gray-200 shadow-lg transition-colors duration-500">
                <img
                src={product.image}
                    alt="Laptop"
                    class="h-[200px] w-full rounded-t-md object-cover"
                />

                <div class="p-4">
                    <h1 class="inline-flex items-center text-lg font-semibold">
                        {product.category}
                    </h1>
                    <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                        debitis?
                    </p>
    
                    <button
                        type="button"
                        class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
                    >
                        Read
                    </button>
                </div>
            </div>
    )
}


export default ProductCard;