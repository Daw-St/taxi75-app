@observable seniorSearch_term: '';
@observable seniorSearch_year: '';
@observable seniorSearch_number: '';
@observable seniorSearch_gender: '';
@observable seniorSearch_block: '';
@observable seniorSearch_is_asc_cdate: false;
@observable seniorSearch_is_desc_cdate: false;
@observable seniorSearch_is_asc_cId: false;
@observable seniorSearch_is_desc_cId: false;
@observable seniorSearch_is_asc_byr: false;
@observable seniorSearch_is_desc_byr: false;
@observable seniorSearch_startDate: new Date(2000,10,20);
@observable seniorSearch_endDate: new Date(2100,10,20);

export const senior_search_card = () => {
    return {
        type: 'SENIOR_SEARCH_CARD'
    }
}

export const senior_search_year = () => {
    return {
        type: 'SENIOR_SEARCH_YEAR'
    }
}

