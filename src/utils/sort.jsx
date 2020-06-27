const sortBy = (data, criteria, order) => {
    if (typeof(criteria) === 'string'){

        if (order === "asc") {
            data.sort((a, b) =>
            {

                    let nameA = a[criteria].toUpperCase();
                    let nameB = b[criteria].toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;

            }

            );
        } else if (order === "desc") {
            data.sort((a, b) =>
                {

                        let nameA = a[criteria].toUpperCase();
                        let nameB = b[criteria].toUpperCase();
                        if (nameA > nameB) {
                            return -1;
                        }
                        if (nameA < nameB) {
                            return 1;
                        }
                        return 0;

                }
            );
        }
    } else {
        return data
    }
};

export default sortBy;