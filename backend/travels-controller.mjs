// Controllers for the Travel Collection

import 'dotenv/config';
import express from 'express';
import * as travels from './travels-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/travels', (req,res) => { 
    travels.createTravel(
        req.body.location, 
        req.body.age, 
        req.body.date
        )
        .then(travel => {
            res.status(201).json(travel);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Creation of a Travel was unsuccesful.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/travels', (req, res) => {
    travels.retrieveTravels()
        .then(travels => { 
            if (travels !== null) {
                console.log(`All travels were retrieved from the collection.`);
                res.json(travels);
            } else {
                res.status(404).json({ Error: 'This travel does not exist.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Retrieval of this travel was unsuccesful.' });
        });
});


// RETRIEVE by ID controller
app.get('/travels/:_id', (req, res) => {
    travels.retrieveTravelByID(req.params._id)
    .then(travel => { 
        if (travel !== null) {
            res.json(travel);
        } else {
            res.status(404).json({ Error: 'This travel does not exist.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Retrieval of this travel was unsuccesful.' });
    });

});


// UPDATE controller ************************************
app.put('/travels/:_id', (req, res) => {
    travels.updateTravel(
        req.params.id, 
        req.body.location, 
        req.body.age, 
        req.body.date
    )
    .then(travel => {
        res.json(travel);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to update this travel.' });
    });
});


// DELETE Controller ******************************
app.delete('/travels/:_id', (req, res) => {
    travels.deleteTravelById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send({ Success: 'This travel was successfully deleted.' });
            } else {
                res.status(404).json({ Success: 'This travel was successfully deleted.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Unable to delete this travel.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});