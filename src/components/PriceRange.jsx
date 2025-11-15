const PriceRange = () => {
    return (
        
    <div class="relative ">
    <input type="range" value="" min="100" max="900" className="w-full h-2 rounded-full cursor-pointer"/>
    <span class="text-[12px] text-body absolute start-0 -bottom-4">$100</span>
    <span class="text-[12px] text-body absolute end-0 -bottom-4">$900</span>
   </div>

    )
}

export default PriceRange;