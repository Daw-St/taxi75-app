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
                seniorSearch_term: action.data
            })
        case 'SENIOR_SEARCH_YEAR':
            console.log('wybrales search year')
            return Object.assign({}, action, {
                seniorSearch_year: action.data
            })
        case 'SENIOR_SEARCH_NUMBER':
            console.log('wybealers szukaj numer')
            return Object.assign({}, action, {
                seniorSearch_number: action.data
            })
        case 'SENIOR_SEARCH_GENDER':
            console.log('wybrales medote geneder')
            return Object.assign({}, action, {
                seniorSearch_gender: action.data
            })
        case 'SENIOR_SEARCH_BLOCK':
            console.log('wyrbales metode szkuj blok')
            return Object.assign({}, action, {
                seniorSearch_block: action.data
            })
        case 'SENIOR_SEARCH_IS_ASC_CDATE_TRUE':
            console.log('wyberas szukaj po ronossej dacie tworzneia true')
            return Object.assign({}, action, {
                seniorSearch_is_asc_cdate: true
            })
        case 'SENIOR_SEARCH_IS_ASC_CDATE_FALSE':
            console.log('wybrales szukaj po rosnacej dacie tworzenie false')
            return Object.assign({}, action, {
                seniorSearch_is_asc_cdate: false
            })
        case 'SENIOR_SEARCH_IS_DESC_CDATE_TRUE':
            console.log('wyrbales medotre szukaj po majelace dacie utowrzneia ture')
            return Object.assign({}, action, {
                seniorSearch_is_desc_cdate: true
            })
        case 'SENIOR_SEARCH_IS_DESC_CDATE_FLASE':
            console.log('wybrales metode szukaj o maehajacacej dacie utwrznei afalsz')
            return Object.assign({}, action, {
                seniorSearch_is_desc_cdate: false
            })
        case 'SENIOR_SEARCH_IS_ASC_CID_TRUE':
            console.log('wybrales medote szukaj po roznacem id karty true')
            return Object.assign({}, aciton, {
                seniorSearch_is_asc_cId: true
            })
        case 'SENIOR_SEARCH_IS_ASC_CID_FALSE':
            console.log('wybralses metode szukaj po rosnacym id false')
            return Object.assign({}, action, {
                seniorSearch_is_asc_cId: false
            })
        case 'SENIOR_SEARCH_IS_DESC_CID_TRUE':
            console.log('wybrales metode szukaj p o malejacym id usera true')
            return Object.assign({}, action, {
                seniorSearch_is_desc_cId: true
            })
        case 'SENIOR_SEARCH_IS_DESC_CID_FALSE':
            console.log('wybrales metode szukaj po malecaym id usera false')
            return Object.assign({}, action, {
                seniorSearch_is_desc_cId: false
            })
        case 'SENIOR_SEARCH_IS_ASC_BYR_TRUE':
            console.log('wybrales metodes szukaj p rosnacym roku urodzenia true')
            return Object.assign({}, action, {
                seniorSearch_is_asc_byr: true 
            })
        case 'SENIOR_SEARCH_IS_ASC_BYR_FALSE':
            console.log('wybrales metode szyk aj po dacie urdzneia rosnaca false')
            return Object.assign({}, aciton, {
                seniorSearch_is_asc_byr: false
            })
        case 'SENIOR_SEARCH_IS_DESC_BYR_TRUE':
            console.log('wyrbales metode szukaj p malejacyj dacie ruodzenia ture')
            return Object.assign({}, action, {
                seniorSearch_is_desc_byr: true
            })
        case 'SENIOR_SEARCH_IS_DESC_BYR_FALSE':
            console.log('wybrales metodsze szukaj po majeace j dacie urodznie false')
            return Object.assign({}, action, {
                seniorSearch_is_desc_byr: false
            })
        case 'SENIOR_SEARCH_STARTDATE':
            console.log('wybrales metode szukaj data startu utowrzneia')
            return Object.assign({}, action, {
                seniorSearch_startDate: action.data
            })
        case 'SENIOR_SEARCH_ENDDATE':
            console.log('wybrales metode szukaj pod acie utowrznei endDate')
            return Object.assign({}, action, {
                seniorSearch_endDate: action.data
            })
        default:
            return state
    }
}