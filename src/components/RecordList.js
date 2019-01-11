import React from 'react';

const RecordList = (props) => {
    const records = props.records.map((record) => {
        return <div>{record}</div>
    });

    return <div>{records}</div>
}

export default RecordList;