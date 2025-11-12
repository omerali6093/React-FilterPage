import ProductCard from './ProductCard'



function Products( { product } ) {

    return (
        <div className="grid grid-cols-4 gap-4 overflow-hidden">
                        {product.map((product, index) => 
                        < ProductCard key={index} product={product}/>                        
                        )}
                    </div>
    )

}


export default Products;