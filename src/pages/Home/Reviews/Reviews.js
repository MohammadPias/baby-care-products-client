import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../Context/useAuth';
import userImage from '../../../images/user.jpg'
import Rating from 'react-rating';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isAdd, setIsAdd] = useState(false);
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
                    setIsAdd(true);
                    alert('Your comment is being posted');
                    reset();
                }
            });
    };
    useEffect(() => {
        fetch('http://localhost:5000/reviews', { method: 'GET' })
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [isAdd]);
    console.log(isAdd)
    return (
        <Container>
            <h6 className="text-center fw-bold mb-2 mt-5">Comments</h6>
            <h2 className="text-center fw-bold my-2">Our Customers Say</h2>
            <div style={{ width: '15%', borderBottom: '3px solid #ff7ca1', margin: 'auto' }}></div>

            <Row className="mt-3">
                <Col xs={12} md={6} lg={8} className="my-2">
                    <div style={{ backgroundColor: '#deeeff', padding: '25px', borderRadius: '8px' }}>
                        <Row sm={1} lg={2} className="g-4">
                            {reviews?.map(review =>
                                <Col key={review._id}>
                                    <Card style={{ minWidth: '18rem', minHeight: '10rem', borderRadius: '8px' }}>
                                        <Card.Body>
                                            {/* <div className="user-image"><img src={user?.photoURL} alt="" /></div> */}
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-image me-2"><img src={review?.photoURL === null ? userImage : review?.photoURL} alt="" /></div>
                                                    <h6 className="fw-bold">{review?.name}</h6>
                                                </div>
                                                <Rating
                                                    initialRating={review?.rating}
                                                    readonly
                                                    emptySymbol="fa fa-star-o fa-x rating-color"
                                                    fullSymbol="fa fa-star fa-x rating-color"
                                                />
                                            </div>
                                            <Card.Text>
                                                {review?.info}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} className="my-2">
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