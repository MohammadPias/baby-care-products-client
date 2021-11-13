import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import banner2 from '../../../images/banner2.png'

const bg = {
    background: `url(${banner2})`,
    width: '100%',
    height: '80vh'
}

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch(`https://cryptic-wildwood-10368.herokuapp.com/users/${data.email}`, { method: 'PUT' })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert(`You added as admin successfully`);
                    reset();
                }
            })
    };
    return (
        <div style={bg}>
            <Container className="form-container">
                <div className="form-content bg-white p-5 rounded-3 shadow-sm mt-5">
                    <h3 className="text-center fw-bold mb-3">Make Admin</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100 mb-3 p-1 form-input" placeholder="email" type="email" {...register("email", { required: true })} />
                        <br />
                        <input className="btn-custom w-100 mb-3 p-2 rounded" type="submit" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default MakeAdmin;