import * as dotenv from 'dotenv';

dotenv.config();

export default {
    mongoose: {
        uri: process.env.DB_URI
    }
}