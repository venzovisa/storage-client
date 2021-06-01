import fetch from 'node-fetch';

export const getData = () => {
    fetch(process.env.REACT_APP_API_URL)
        .then(res => res.json())
        .then(json => json);
};