import React from 'react';
import { Button, Container, Alert, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import banner2 from '../../images/banner2.png';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const bg = {
    background: `url(${banner2})`,
    width: '100%',
    height: '100vh'
}

const Register = () => {
    const { error, loding, handleSignup, handleGoogleSignin } = useAuth();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        if (data.password === data.password2) {
            const name = data.Fname + " " + data.Lname;
            // console.log(name)
            handleSignup(data.email, data.password, name, history);
        }
        else {
            alert("Password don't match !!")
        }
    };
    return (
        <div style={bg}>
            <Container className="form-container">
                <div className="form-content bg-white p-5 rounded-3 shadow-sm mt-5">
                    <h3 className="text-center fw-bold mb-3">Sign up</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100 mb-3 p-1 form-input" placeholder="first name" type="name" {...register("Fname", { required: true })} />
                        <br />
                        <input className="w-100 mb-3 p-1 form-input" placeholder="last name" type="name" {...register("Lname", { required: true })} />
                        <br />
                        <input className="w-100 mb-3 p-1 form-input" placeholder="email" type="email" {...register("email", { required: true })} />
                        <br />
                        <input className="w-100 mb-3 p-1 form-input" placeholder="password" type="password" {...register("password", { required: true })} />
                        <br />
                        <input className="w-100 mb-3 p-1 form-input" placeholder="Re-type password" type="password" {...register("password2", { required: true })} />
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
                        <Link to="/login">Already have an account? Login.</Link>
                    </div>
                    <br />
                    <Button onClick={handleGoogleSignin} className="btn-custom w-100"><i class="fab fa-google"></i>   Continue With google</Button>
                </div>
            </Container>
        </div>
    );
};

export default Register;