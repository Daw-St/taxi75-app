export const senior_search = (data) => {
    return {
        type: 'SENIOR_SEARCH',
        seniorSearch_term: data.term,
        seniorSearch_year: data.year,
        seniorSearch_number: data.number,
        seniorSearch_gender: data.gender
    }
};

export const senior_search_card = (data) => {
    return {
        type: 'SENIOR_SEARCH_CARD',
        data: data
    }
};

export const senior_search_year = (data) => {
    return {
        type: 'SENIOR_SEARCH_YEAR',
        data: data
    }
};

export const senior_search_number = (data) => {
    return {
        type: 'SENIOR_SEARCH_NUMBER',
        data: data
    }
};

export const senior_search_gender = (data) => {
    return {
        type: 'SENIOR_SEARCH_GENDER',
        data: data
    }
};

export const update_seniors_list = (data) => {
    return {
        type: 'UPDATE_SENIORS_LIST',
        data: data
    }
};

