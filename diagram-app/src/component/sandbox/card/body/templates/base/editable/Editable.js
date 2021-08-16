import React from 'react'

const Editable = ({value,handleChange}) => {
    return (
        <div>
                <input 
                type="text"
                value={value.toString()}
                onChange={handleChange}
                
                />
        </div>
    )
}

export default Editable
