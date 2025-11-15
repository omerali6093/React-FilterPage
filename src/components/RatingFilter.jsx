


const RatingFilter = ( {onchangeRating} ) => {

    let ratingStars = [5, 4, 3, 2, 1];


    return (
        
     <div>
            {ratingStars.map((rating) => (
                <div
                    key={rating}
                    className="flex items-center cursor-pointer mb-2"
                    onClick={() => onchangeRating(rating)}
                >
                    <div className="flex items-center">
                        {Array(5)
                            .fill()
                            .map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className={`size-5 ${
                                        i < rating ? "fill-yellow-400" : "fill-gray-300"
                                    }`}
                                >
                                    <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557L3.04 9.94a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            ))}
                    </div>

                    <p className="text-[14px] ml-1.5 font-semibold">
                        {rating}
                    </p>

                
                </div>
            ))}
        </div>

    )
};



export default RatingFilter;