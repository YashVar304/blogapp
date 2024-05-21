import React from 'react'
import { useId } from 'react';
function Select({options,label,className='',...props},ref) {
    const id = useId();
    return (
        <div className='w-full flex flex-col px-10 py-4'>
            {label && <label htmlFor={id} className='inline-block mb-1 px-4'>{label}</label>}
             <select  id={id} {...props} ref={ref} className={`mx-4 px-3 py-2 bg-gray-200 text-black duration-200 rounded-lg ${className}`}>
                {options.map((option)=>(
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
             </select>
        </div>
    )
}

export default React.forwardRef(Select)