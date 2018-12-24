import React from 'react';
import { statusMap } from '../mock-data';
import DropDown from './DropDown';

const statusOptions = Object.keys(statusMap).map((status) => {
    const sObj = {
        id: status,
        name: statusMap[status]
    };
    return sObj;
})

export default function Books({ data: { title, isbn }, currentStatus, onStatusChange }) {
    const handleStatusChange = (nextStatus) => {
        onStatusChange(isbn, currentStatus, nextStatus);
    }
    return (
        <div className={"book-card"}>
            <img alt={title} src={'https://static.boredpanda.com/blog/wp-content/uuuploads/worst-book-covers-titles/worst-book-covers-titles-27.jpg'} />
            <h5>{title}</h5>
            <div>
                <DropDown
                    options={statusOptions}
                    selectedValue={currentStatus}
                    onChange={handleStatusChange}
                />
            </div>
        </div>
    );
}

