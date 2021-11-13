import React from 'react';
import { Button, Container, Alert, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Login.css';
import banner2 from '../../../images/banner2.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const bg = {
    background: `url(${banner2})`,
    width: '100%',
    height: '100vh'
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const destination = location?.state?.from || '/home';
    const { error, loding, handleGoogleSignin, handleLogin } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data.email, data.password)
        handleLogin(data.email, data.password, history, destination)
    };
    const handleGoogleLogin = () => {
        handleGoogleSignin(history, destination)
    }
    return (
        <div style={bg}>
            <Container className="form-container">
                <div className="form-content bg-white p-5 rounded-3 shadow-sm mt-5">
                    <h3 className="text-center fw-bold mb-3">Log in</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100 mb-3 p-1 form-input" placeholder="Your email" type="email" {...register("email", { required: true })} />
                        <br />
                        <input className="w-100 mb-3 p-1 form-input" placeholder="Your password" type="password" {...register("password", { required: true })} />
                        <br />
                        <input className="btn-custom w-100 mb-3 p-2 rounded" type="submit" />
                    </form>
                    {loding &&
                        <div className="d-flex justify-content-center"><Spinner animation="border" /></div>}
                    {error &&
                        <Alert className="text-center" variant={'danger'}>
                            {error}
                        </Alert>}
                    <div className="text-center">
                        <Link to="/register">Don't have an account? Register.</Link>
                    </div>
                    <br />
                    <Button onClick={handleGoogleLogin} className="btn-custom w-100"><i className="fab fa-google"></i>   Continue With google</Button>
                </div>
            </Container>
        </div>
    );
};

export default Login;