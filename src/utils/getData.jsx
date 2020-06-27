import fetch from 'node-fetch';

export const getData = () => {
    fetch('http://localhost:3000')
        .then(res => res.json())
        .then(json => json);
};