import * as React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Layout from '../components/Layout';


const Login: React.FC<LoginProps> = props => {
    return (
        <Layout>
            <form className='form-group border shadow bg-white font-weight-bold p-4'>
                <h4 className='mb-2 text-center'>Login</h4>
                <div className="d-flex flex-column">
                    <button type='submit' className='btn btn-warning btn-shadow mt-3'><FaGoogle/> Log in with Google</button>
                </div>
            </form>
        </Layout>
    );
}

interface LoginProps {}

export default Login;