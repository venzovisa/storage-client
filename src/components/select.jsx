import React from 'react';

const Select = ({ name, label, errors, options, selectedGenre,...rest }) => {
    return <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select {...rest} name={name} className="form-control" value={selectedGenre}>
            { options.map((item, id) => <option value={item} key={id}>{item}</option>)}
        </select>
        {errors && <div className="alert alert-danger m-1">{errors}</div>}
    </div>

};

export default Select;