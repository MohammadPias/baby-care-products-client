import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Context/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const newData = { ...data, photoURL: user?.photoURL }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your comment is being posted');
                    reset();
                }
            });
    };
    return (
        <div style={{ backgroundColor: '#deeeff', padding: '25px', borderRadius: '8px', maxWidth: '370px', margin: 'auto' }}>
            <h4 className="text-center fw-bold">Add Your Comment</h4>
            <div className="line mx-auto mb-3" style={{ borderBottom: '3px solid #ff7ca1', width: '15%' }}></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Your name" className="w-100 mb-3 p-1 form-input" {...register("name", { required: true, maxLength: 20 })} />
                <br />
                <textarea placeholder="Your comment" className="w-100 mb-3 p-1 form-input" {...register("info")} />
                <br />
                <input placeholder="Rating {0-5}" className="w-100 mb-3 p-1 form-input" type="number" {...register("rating", { min: 0, max: 5 })} />
                <br />
                <input className="btn-custom rounded-pill" type="submit" />
            </form>
        </div>
    );
};

export default Review;