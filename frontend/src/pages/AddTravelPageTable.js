import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddTravelPageTable = () => {

    const [location, setLocation]       = useState('');
    const [age, setAge]         = useState('');
    const [date, setDate] = useState('');
    
    const redirect = useNavigate();

    const addTravel = async () => {
        const newTravel = { location, age, date };
        const response = await fetch('/travels', {
            method: 'post',
            body: JSON.stringify(newTravel),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfully added travel`);
        } else {
            alert(`Error: could not add travel = ${response.status}`);
        }
        redirect("/travels");
    };


    return (
        <>
        <article>
            <h2>Add Travel</h2>
            <p>Add a travel here.</p>
            
            <table id="travels">
                <caption>Which travel are you adding?</caption>
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
                            placeholder="Location of Travel"
                            value={location}
                            onChange={e => setLocation(e.target.value)} 
                            id="location" />
                    </td>

                    <td><label for="age">Age Traveled</label>
                        <input
                            type="number"
                            value={age}
                            placeholder="Age of travel"
                            onChange={e => setAge(e.target.value)} 
                            id="age" />
                    </td>

                    <td><label for="date">Date of Travel</label>
                        <input
                            type="date"
                            placeholder="Date of travel"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addTravel}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddTravelPageTable;