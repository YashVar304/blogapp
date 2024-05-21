import React, { useId } from "react";

const Input = React.forwardRef(function Input({name,label,type="text",placeholder,className='',...props},ref){
    const id = useId();
    return(
        <div className="w-full py-4 flex flex-col px-10">
           {label && <label htmlFor={id} className="inline-block mb-1 px-4">{label}</label>} 
            <input name={name} id={id} type={type} placeholder={placeholder} className={`px-6 py-2 inline-block duration-200 border-black border rounded-full ${className}`} {...props} ref={ref}/>
        </div>
    )
})
export default Input