import * as express from 'express';
//@ts-ignore
import * as morgan from 'morgan';
import * as path from 'path';
import routes from './routes';
import connectDB from './db';

const app = express();

connectDB();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json()); // allows our server to accept JSON inside of a request body
app.use('/api', routes);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
