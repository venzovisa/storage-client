const getGenres = (data) => {
    return [...new Set(data.map(item => item.genre))].sort(
        function(a, b){
            let x = a.toLowerCase();
            let y = b.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        }
    );
};

export default getGenres;