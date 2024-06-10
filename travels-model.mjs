// Models for the travels Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Connection failed.' });
    } else  {
        console.log('Success: You are connected to Travels collection.');
    }
});

// SCHEMA: Define the collection's schema.
const travelSchema = mongoose.Schema({
	location:    { type: String, required: true },
	age:     { type: Number, required: true },
	date: { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "travels".
const travels = mongoose.model('Travel', travelSchema);


// CREATE model *****************************************
const createTravel = async (location, age, date) => {
    const travel = new travels({ 
        location: location, 
        age: age, 
        date: date
    });
    return travel.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveTravels = async () => {
    const query = travels.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTravelByID = async (_id) => {
    const query = travels.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTravelById = async (_id) => {
    const result = await travels.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTravel = async (_id, location, age, date) => {
    const result = await travels.replaceOne({_id: _id }, {
        location: location,
        age: age,
        date: date
    });
    return { 
        _id: _id, 
        location: location,
        age: age,
        date: date
    }
}

// EXPORT the variables for use in the controller file.
export { createTravel, retrieveTravels, retrieveTravelByID, updateTravel, deleteTravelById }