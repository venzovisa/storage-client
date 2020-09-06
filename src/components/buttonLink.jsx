import React from 'react';

const ButtonLink = ({ href, title, className }) => {
    return <a href={href} title={title} className={"btn " + className} >{title}</a>
};

export default ButtonLink;