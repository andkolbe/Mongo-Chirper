import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import type { IChirp } from '../utils/types'
import moment from 'moment';
import { Link } from 'react-router-dom';

const Home: React.FC<HomeProps> = props => {

    const [chirps, setChirps] = useState<IChirp[]>([]);  
    
    useEffect(() => { 
        (async () => {
            const res = await fetch('/api/chirps');
            const chirps = await res.json();
            setChirps(chirps);
        })() 
    }, []);
    
    return (
        <Layout>
            {chirps.map(chirp => (  
                <div key={`chirp-key-${chirp._id}`} className="card my-2 shadow">
                    <div className="card-body">                        <h5 className="card-title">{chirp.name}</h5>
                        <p className="card-text">{chirp.content}</p>
                        <h6 className="card-text">Location: {chirp.location}</h6>
                        <small className="card-text text-secondary">{moment(chirp.createdAt).format('h:mm a - MMMM Do YYYY')}</small>
                        <div className="d-flex justify-content-end">
                            <Link className="btn text-success font-weight-bold" to={`/chirps/${chirp._id}/admin`}>Edit Chirp</Link>
                        </div>
                    </div>
                </div>
            ))}
        </Layout>
    );
}

interface HomeProps {}

export default Home;