import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your comment is being posted');
                    reset();
                }
            });
    };
    useEffect(() => {
        fetch('http://localhost:5000/reviews', { method: 'GET' })
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <Container>
            <h6 className="text-center fw-bold mb-2 mt-5">Comments</h6>
            <h2 className="text-center fw-bold my-2">Our Customers Says</h2>
            <div style={{ width: '15%', borderBottom: '3px solid #ff7ca1', margin: 'auto' }}></div>

            <Row className="mt-5">
                <Col xs={12} md={6} lg={8}>
                    <div style={{ backgroundColor: '#deeeff', padding: '25px', borderRadius: '8px' }}>

                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div style={{ backgroundColor: '#deeeff', padding: '25px', borderRadius: '8px' }}>
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
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;