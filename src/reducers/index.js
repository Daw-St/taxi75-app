const initialState = {
    rideSearch_term: '',
    rideSearch_pickup_date: '',
    rideSearch_status: '',
    rideSearch_creation_date: '',
    rides: [],
    seniorSearch_term: '',
    seniorSearch_year: '',
    seniorSearch_number: '',
    seniorSearch_gender: '',
    seniorSearch_block: '',
    seniors: []

};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_RIDES_LIST':
            return Object.assign({}, state, {
                seniors: action.data
            });
        case 'RIDE_SEARCH':
            return Object.assign({}, state, {
                rideSearch_term: action.rideSearch_term,
                rideSearch_pickup_date: action.rideSearch_pickup_date,
                rideSearch_status: action.rideSearch_status,
                rideSearch_creation_date: action.rideSearch_creation_date,
            });
            case 'RIDE_SEARCH_CARD':
            return Object.assign({}, state, {
                rideSearch_term: action.data
            });
        case 'RIDE_SEARCH_PICKUP_DATE':
            return Object.assign({}, state, {
                rideSearch_pickup_date: action.data
            });
        case 'RIDE_SEARCH_STATUS':
            return Object.assign({}, state, {
                rideSearch_status: action.data
            });
        case 'RIDE_SEARCH_CREATION_DATE':
            return Object.assign({}, state, {
                rideSearch_creation_date: action.data
            });
        case 'UPDATE_SENIORS_LIST':
            return Object.assign({}, state, {
                seniors: action.data
            });
        case 'SENIOR_SEARCH':
            return Object.assign({}, state, {
                seniorSearch_term: action.seniorSearch_term,
                seniorSearch_year: action.seniorSearch_year,
                seniorSearch_number: action.seniorSearch_number,
                seniorSearch_gender: action.seniorSearch_gender,
            });
        case 'SENIOR_SEARCH_CARD':
            return Object.assign({}, state, {
                seniorSearch_term: action.data
            });
        case 'SENIOR_SEARCH_YEAR':
            return Object.assign({}, state, {
                seniorSearch_year: action.data
            });
        case 'SENIOR_SEARCH_NUMBER':
            return Object.assign({}, state, {
                seniorSearch_number: action.data
            });
        case 'SENIOR_SEARCH_GENDER':
            return Object.assign({}, state, {
                seniorSearch_gender: action.data
            });

        default:
            return state
    }
}
