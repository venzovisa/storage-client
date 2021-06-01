import fetch from 'node-fetch';

export const getData = () => {
    fetch(process.env.api_url)
        .then(res => res.json())
        .then(json => json);
};