import React from 'react';

const Input = ({label, type, palceHolder, value, name, required, change}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input 
            className=""
            type={type}
            name={name}
            placeholder={palceHolder}
            value={value}
            required={required}
            onChange={change}/>
        </div>
    );
}
 
export default Input;