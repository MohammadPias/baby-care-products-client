import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import banner2 from '../../../images/banner2.png'

const bg = {
    background: `url(${banner2})`,
    width: '100%',
    height: '100vh'
}
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    };
    return (
        <div style={bg}>
            <Container className="form-container">
                <div className="form-content bg-white p-5 rounded-3 shadow-sm mt-5">
                    <h3 className="text-center fw-bold mb-3">Add Product</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100 mb-3 p-1 form-input" placeholder="Product name" type="name" {...register("name", { required: true })} />
                        <br />
                        <textarea className="w-100 mb-3 p-1 form-input" placeholder="Description" type="text" {...register("info", { required: true })} />
                        <br />
                        <input className="w-100 mb-3 p-1 form-input" placeholder="Price" type="number" {...register("price", { required: true })} />
                        <br />
                        <input className="w-100 mb-3 p-1 form-input" placeholder="Rating" type="number" {...register("rating", { required: true, max: 5, min: 0 })} />
                        <br />
                        <input className="w-100 mb-3 p-1 form-input" placeholder="Photo URL" type="text" {...register("img", { required: true })} />
                        <br />
                        <input className="btn-custom w-100 mb-3 p-2 rounded" type="submit" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AddProduct;