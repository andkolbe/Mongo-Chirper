import * as express from 'express';
import * as session from 'express-session';
import * as morgan from 'morgan';
import * as passport from 'passport';
import * as path from 'path';
import routes from './routes';
import connectDB from './db';

import './middlewares/passport-strategies';

const app = express();

connectDB();

app.use(session({ // this needs to go above the passport middleware
    secret: 'Winnie', // the secret can be anything you want
    resave: false, // false = we don't want to save a session if nothing is modified
    saveUninitialized: false // false = don't create a session unless something is stored 
  }))
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(express.static('public'));
app.use(express.json()); // allows our server to accept JSON inside of a request body
app.use(routes);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
