import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTravelPageTable = ({ travelToEdit }) => {
 
    const [location, setLocation]       = useState(travelToEdit.location);
    const [age, setAge]         = useState(travelToEdit.age);
    const [date, setDate] = useState(travelToEdit.date);
    
    const redirect = useNavigate();

    const editTravel = async () => {
        const response = await fetch(`/travels/${travelToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                location: location, 
                age: age, 
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Successfully edited travel`);
        } else {
            const errMessage = await response.json();
            alert(`Error: could not edit travel ${response.status}. ${errMessage.Error}`);
        }
        redirect("/travels");
    }

    return (
        <>
        <article>
            <h2>Edit travel</h2>
            <p>Edit travels here.</p>
            <table id="travels">
                <caption>Which travel are you editing?</caption>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Age</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="location">Travel Location</label>
                        <input
                            type="text"
                            placeholder="Travel location"
                            value={location}
                            onChange={e => setLocation(e.target.value)} 
                            id="location" />
                    </td>

                    <td><label for="age">Age traveled</label>
                        <input
                            type="number"
                            value={age}
                            placeholder="Age traveled"
                            onChange={e => setAge(e.target.value)} 
                            id="age" />
                    </td>

                    <td><label for="date">Date Traveled</label>
                        <input
                            type="date"
                            placeholder="Date traveled"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editTravel}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditTravelPageTable;