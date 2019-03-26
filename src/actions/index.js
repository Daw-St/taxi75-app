export const senior_search = (data) => {
    return {
        type: 'SENIOR_SEARCH',
        seniorSearch_term: data.term,
        seniorSearch_year: data.year,
        seniorSearch_number: data.number,
        seniorSearch_gender: data.gender,
        seniorSearch_block: data.block,
        seniorSearch_is_asc_cdate: data.is_asc_cdate,
        seniorSearch_is_desc_cdate: data.is_desc_cdate,
        seniorSearch_is_asc_cId: data.is_asc_cId,
        seniorSearch_is_desc_cId: data.is_desc_cId,
        seniorSearch_is_asc_byr: data.is_asc_byr,
        seniorSearch_is_desc_byr: data.is_desc_byr,
        seniorSearch_startDate: data.startDate,
        seniorSearch_endDate: data.endDate,
    }
}

export const senior_search_card = (data) => {
    return {
        type: 'SENIOR_SEARCH_CARD',
        data: data
    }
}

export const senior_search_year = (data) => {
    return {
        type: 'SENIOR_SEARCH_YEAR',
        data: data
    }
}

export const senior_search_number = (data) => {
    return {
        type: 'SENIOR_SEARCH_NUMBER',
        data: data
    }
}

export const senior_search_gender = (data) => {
    return {
        type: 'SENIOR_SEARCH_GENDER',
        data: data
    }
}

export const senior_search_block = (data) => {
    return {
        type: 'SENIOR_SEARCH_BLOCK',
        data: data
    }
}

export const senior_search_is_asc_cdate_true = () => {
    return {
        type: 'SENIOR_SEARCH_IS_ASC_CDATE_TRUE',
    }
}

export const senior_search_is_asc_cdate_false = () => {
    return {
        type: 'SENIOR_SEARCH_IS_ASC_CDATE_FALSE',
    }
}

export const senior_search_is_desc_cdate_true = () => {
    return {
        type: 'SENIOR_SEARCH_IS_DESC_CDATE_TRUE',
    }
}

export const senior_search_is_desc_cdate_false = () => {
    return {
        type: 'SENIOR_SEARCH_IS_DESC_CDATE_FLASE',
    }
}

export const senior_search_is_asc_cId_true = () => {
    return {
        type: 'SENIOR_SEARCH_IS_ASC_CID_TRUE',
    }
}

export const senior_search_is_asc_cId_false = () => {
    return {
        type: 'SENIOR_SEARCH_IS_ASC_CID_FALSE',
    }
}

export const senior_search_is_desc_cId_true = () => {
    return {
        type: 'SENIOR_SEARCH_IS_DESC_CID_TRUE',
    }
}

export const senior_search_is_desc_cId_false = () => {
    return {
        type: 'SENIOR_SEARCH_IS_DESC_CID_FALSE',
    }
}

export const senior_search_is_asc_byr_true = () => {
    return {
        type: 'SENIOR_SEARCH_IS_ASC_BYR_TRUE',
    }
}

export const senior_search_is_asc_byr_false = () => {
    return {
        type: 'SENIOR_SEARCH_IS_ASC_BYR_FALSE',
    }
}

export const senior_search_is_desc_byr_true = () => {
    return {
        type: 'SENIOR_SEARCH_IS_DESC_BYR_TRUE',
    }
}

export const senior_search_is_desc_byr_false = () => {
    return {
        type: 'SENIOR_SEARCH_IS_DESC_BYR_FALSE',
    }
}

export const senior_search_startDate = (data) => {
    return {
        type: 'SENIOR_SEARCH_STARTDATE',
        data: data
    }
}

export const senior_search_endDate = (data) => {
    return {
        type: 'SENIOR_SEARCH_ENDDATE',
        data: data
    }
}

export const update_seniors_list = (data) => {
    return {
        type: 'UPDATE_SENIORS_LIST',
        data: data
    }
}

