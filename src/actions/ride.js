export const ride_search = (data) => {
    return {
        type: 'RIDE_SEARCH',
        rideSearch_term: data.card_id,
        rideSearch_pickup_date: data.pickup_date,
        rideSearch_status: data.status,
        rideSearch_creation_date: data.creation_daye,
    }
};

export const ride_search_card = (data) => {
    return {
        type: 'RIDE_SEARCH_CARD',
        data: data
    }
};

export const ride_search_pickup_date = (data) => {
    return {
        type: 'RIDE_SEARCH_PICKUP_DATE',
        data: data
    }
};

export const ride_search_status = (data) => {
    return {
        type: 'RIDE_SEARCH_STATUS',
        data: data
    }
};

export const ride_search_creation_date = (data) => {
    return {
        type: 'RIDE_SEARCH_CREATION_DATE',
        data: data
    }
};

export const update_rides_list = (data) => {
    return {
        type: 'UPDATE_RIDES_LIST',
        data: data
    }
};

