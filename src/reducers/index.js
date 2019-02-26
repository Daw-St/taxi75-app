const initialState = {
    seniorSearch_term: '',
    seniorSearch_year: '',
    seniorSearch_number: '',
    seniorSearch_gender: '',
    seniorSearch_block: '',
    seniorSearch_is_asc_cdate: false,
    seniorSearch_is_desc_cdate: false,
    seniorSearch_is_asc_cId: false,
    seniorSearch_is_desc_cId: false,
    seniorSearch_is_asc_byr: false,
    seniorSearch_is_desc_byr: false,
    seniorSearch_startDate: new Date(2000,10,20),
    seniorSearch_endDate: new Date(2100,10,20)
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SENIOR_SEARCH_CARD':
            console.log('wybrales senior serach id')
            return Object.assign({}, state, {
                seniorSearch_term: action.payload
            })
        case 'SENIOR_SEARCH_YEAR':
            console.log('wybrales search year')
            return Object.assign({}, action, {
                seniorSearch_year: action.payload
            })
        case 'SENIOR_SEARCH_NUMBER':
            console.log('wybealers szukaj numer')
            return Object.assign({}, action, {
                seniorSearch_number: action.payload
            })
        case 'SENIOR_SEARCH_GENDER':
            console.log('wybrales medote geneder')
            return Object.assign({}, action, {
                seniorSearch_gender: action.payload
            })
        case 'SENIOR_SEARCH_BLOCK':
            console.log('wyrbales metode szkuj blok')
            return Object.assign({}, action, {
                seniorSearch_block: action.payload
            })
        case 'SENIOR_SEARCH_IS_ASC_CDATE':
            console.log('wyberas szukaj po ronossej dacie tworzneia')
            return Object.assign({}, action, {
                seniorSearch_is_asc_cdate: 
            })
    }
}