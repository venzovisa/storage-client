import React from 'react';

const Input = ({ name, label, errors, ...rest }) => {
    return <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input {...rest} name={name} placeholder={label} className="form-control"/>
        {errors && <div className="alert alert-danger m-1">{errors}</div>}
    </div>

};

export default Input;