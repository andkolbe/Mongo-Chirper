import * as mongoose from 'mongoose';

// The Schema defines the structure of the documents that we are later going to store inside a collection
// a model wraps around a schema and provides us an interface by which we can communicate with a database collection for that document type

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// create the model and export it 

// the first argument is the name of the model
// mongoose will look at this name, pluralize it, and look for that collection inside the database whenever we use this model in the future to communicate with the database

// the second argument is the schema we want to base this model on
export default mongoose.model('User', UserSchema);
