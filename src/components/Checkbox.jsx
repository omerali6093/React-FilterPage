const Checkbox = ({
    id,
    text,
    checked,
    ...props
}) => {

    return (
        <div className="flex items-center mb-3">
            <input 
            id={id}
            type="checkbox"
            className="cursor-pointer"
            checked={checked}
            {...props}
             />

            <p className="text-md ml-4">{text}</p>
        </div>
    )

}


export default Checkbox;