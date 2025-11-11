const Checkbox = ({
    id,
    text,

}) => {

    return (
        <div className="flex items-center mb-3">
            <input 
            id={id}
            type="checkbox" />

            <p className="text-md ml-4">{text}</p>
        </div>
    )

}


export default Checkbox;