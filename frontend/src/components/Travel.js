import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Travel({ travel, onEdit, onDelete }) {
    return (
        <tr>
            <td>{travel.location}</td>
            <td>{travel.age}</td>
            <td>{travel.date.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteForever onClick={() => onDelete(travel._id)} /></td>
            <td><MdEdit onClick={() => onEdit(travel)} /></td>
        </tr>
    );
}

export default Travel;