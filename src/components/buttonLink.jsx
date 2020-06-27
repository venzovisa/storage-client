import React from 'react';

const Link = ({ href, title, className }) => {
    return <a href={href} title={title} className={"btn " + className} >{title}</a>
};

export default Link;