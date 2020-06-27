import React from 'react';

const Button = ({ btnClass, btnValue, onSelect }) => {
    return <button className={"btn " + btnClass} onClick={onSelect} value={btnValue}>{btnValue}</button>
};

export default Button;