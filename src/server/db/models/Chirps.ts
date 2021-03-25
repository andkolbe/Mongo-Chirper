import * as mongoose from 'mongoose';

// The Schema defines the structure of the documents that we are later going to store inside a collection
// a model wraps around a schema and provides us an interface by which we can communicate with a database collection for that document type

const ChirpSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

// create the model and export it 
export default mongoose.model('Chirp', ChirpSchema);

