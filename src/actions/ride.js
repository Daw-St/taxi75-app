export const ride_search = (data) => {
    return {
        type: 'RIDE_SEARCH',
        rideSearch_term: data.card_id,
        rideSearch_pickup_date: data.pickup_date,
        rideSearch_pickup_time: data.pickup_time,
        rideSearch_status: data.status,
        rideSearch_creation_date: data.creation_daye,
        rideSearch_is_asc_pdate: data.is_asc_pdate,
        rideSearch_is_desc_pdate: data.is_desc_pdate,
        rideSearch_is_asc_ptime: data.is_asc_ptime,
        rideSearch_is_desc_ptime: data.is_desc_ptime,
        rideSearch_is_asc_status: data.is_asc_status,
        rideSearch_is_desc_status: data.is_desc_status,
        rideSearch_is_asc_cdate: data.is_asc_cdate,
        rideSearch_is_desc_cdate: data.is_desc_cdate,
        rideSearch_is_asc_cId: data.is_asc_cId,
        rideSearch_is_desc_cId: data.is_desc_cId
    }
}

export const ride_search_card = (data) => {
    return {
        type: 'RIDE_SEARCH_CARD',
        data: data
    }
}

export const ride_search_pickup_date = (data) => {
    return {
        type: 'RIDE_SEARCH_PICKUP_DATE',
        data: data
    }
}

export const ride_search_pickup_time = (data) => {
    return {
        type: 'RIDE_SEARCH_PICKUP_TIME',
        data: data
    }
}

export const ride_search_status = (data) => {
    return {
        type: 'RIDE_SEARCH_STATUS',
        data: data
    }
}

export const ride_search_creation_date = (data) => {
    return {
        type: 'RIDE_SEARCH_CREATION_DATE',
        data: data
    }
}

export const ride_search_is_asc_pdate_true = () => {
    return {
        type: 'RIDE_SEARCH_IS_ASC_PDATE_TRUE',
    }
}

export const ride_search_is_asc_pdate_false = () => {
    return {
        type: 'RIDE_SEARCH_IS_ASC_PDATE_FALSE',
    }
}

export const ride_search_is_desc_pdate_true = () => {
    return {
        type: 'RIDE_SEARCH_IS_DESC_PDATE_TRUE',
    }
}

export const ride_search_is_desc_pdate_false = () => {
    return {
        type: 'RIDE_SEARCH_IS_DESC_PDATE_FALSE',
    }
}

export const ride_search_is_asc_ptime_true = () => {
    return {
        type: 'RIDE_SEARCH_IS_ASC_PTIME_TRUE',
    }
}

export const ride_search_is_asc_ptime_false = () => {
    return {
        type: 'RIDE_SEARCH_IS_ASC_PTIME_FALSE',
    }
}

export const ride_search_is_desc_ptime_true = () => {
    return {
        type: 'RIDE_SEARCH_IS_DESC_PTIME_TRUE',
    }
}

export const ride_search_is_desc_ptime_false = () => {
    return {
        type: 'RIDE_SEARCH_IS_DESC_PTIME_FALSE',
    }
}

export const ride_search_is_asc_status_true = () => {
    return {
        type: 'RIDE_SEARCH_IS_ASC_STATUS_TRUE',
    }
}

export const ride_search_is_asc_status_false = () => {
    return {
        type: 'RIDE_SEARCH_IS_ASC_STATUS_FALSE',
    }
}

export const ride_search_is_desc_status_true = () => {
    return {
        type: 'RIDE_SEARCH_IS_DESC_STATUS_TRUE',
    }
}

export const ride_search_is_desc_status_false = () => {
    return {
        type: 'RIDE_SEARCH_IS_DESC_STATUS_FALSE',
    }
}

export const ride_search_is_asc_cdate_true = () => {
    return {
        type: 'RIDE_SEARCH_IS_ASC_CDATE_TRUE',
    }
}

export const ride_search_is_asc_cdate_false = () => {
    return {
        type: 'RIDE_SEARCH_IS_ASC_CDATE_FALSE',
    }
}

export const ride_search_is_desc_cdate_true = () => {
    return {
        type: 'RIDE_SEARCH_IS_DESC_CDATE_TRUE',
    }
}

export const ride_search_is_desc_cdate_false = () => {
    return {
        type: 'RIDE_SEARCH_IS_DESC_CDATE_FALSE',
    }
}

export const ride_search_is_asc_cId_true = () => {
    return {
        type: 'RIDE_SEARCH_IS_ASC_CID_TRUE',
    }
}

export const ride_search_is_asc_cId_false = () => {
    return {
        type: 'RIDE_SEARCH_IS_ASC_CID_FALSE',
    }
}

export const ride_search_is_desc_cId_true = () => {
    return {
        type: 'RIDE_SEARCH_IS_DESC_CID_TRUE',
    }
}

export const ride_search_is_desc_cId_false = () => {
    return {
        type: 'RIDE_SEARCH_IS_DESC_CID_FALSE',
    }
}

export const update_rides_list = (data) => {
    return {
        type: 'UPDATE_RIDES_LIST',
        data: data
    }
}

