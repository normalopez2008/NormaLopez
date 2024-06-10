import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TravelList from '../components/TravelList';
import { Link } from 'react-router-dom';

function TravelLog({ setTravel }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [travels, setTravels] = useState([]);

    // RETRIEVE the entire list of travels
    const loadTravels = async () => {
        const response = await fetch('/travels');
        const travels = await response.json();
        setTravels(travels);
    } 
    

    // UPDATE a single travel
    const onEditTravel = async travel => {
        setTravel(travel);
        redirect("/update");
    }


    // DELETE a single travel 
    const onDeleteTravel = async _id => {
        const response = await fetch(`/travels/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/travels');
            const travels = await getResponse.json();
            setTravels(travels);
        } else {
            console.error(`Unable to delete travel = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the travels
    useEffect(() => {
        loadTravels();
    }, []);

    // DISPLAY the travels
    return (
        <>
            <h2>List of Travels</h2>
            <p>All travels' details.</p>
            <Link to="/create">Add Travel</Link>
            <TravelList 
                travels={travels} 
                onEdit={onEditTravel} 
                onDelete={onDeleteTravel} 
            />
        </>
    );
}

export default TravelLog;