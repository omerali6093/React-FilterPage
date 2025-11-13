const ProductCard = ({ product }) => {
    return (

        <div className="w-[300px] relative rounded-md text-black border border-gray-200 shadow-lg transition-colors duration-500">
            <img
                src={product.image}
                alt="Laptop"
                class="h-[200px] w-full rounded-t-md object-cover"
            />

            <div className="p-4 max-h-30 mb-22">

                <h4 className="text-[14px] mb-2  text-gray-600">{product.category}</h4>

                <h1 className="inline-flex items-center text-lg font-semibold">
                    {product.title}
                </h1>
                <p className="mt-3 text-sm text-gray-600 ">
                    {product.description}
                </p>
                

            </div>

            <div className="absolute   bottom-0 w-full p-4">

                <p className="mt-3 text-[#38a9fa] font-bold">${product.price}</p>

                <button
                    type="button"
                    className="mt-4 w-full rounded-sm bg-[#38a9fa] px-2 py-1.5 text-sm font-semibold text-white shadow-sm"
                >
                    Add to cart
                </button>

            </div>

        </div>

    )
}


export default ProductCard;