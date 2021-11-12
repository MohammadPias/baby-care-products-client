import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../Context/useAuth';
import Pay from '../Pay/Pay';

const PlaceOrder = () => {
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const productId = useParams();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId.productId}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(result => setProduct(result))
    }, [])
    return (
        <Container>
            <h2 className="text-center fw-bold my-2">Order Now</h2>
            <div style={{ width: '15%', borderBottom: '3px solid #ff7ca1', margin: 'auto' }}></div>

            <Row className="mt-5">
                <Col xs={12} md={6}>
                    <div style={{ backgroundColor: '#deeeff', padding: '25px', borderRadius: '8px' }}>

                        <Card style={{ minWidth: '18rem' }}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>{product?.name}</Card.Title>
                                <Card.Text>
                                    {product?.info}
                                </Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Price: {product.price}</h6>
                                    <Rating
                                        initialRating={product?.rating}
                                        readonly
                                        emptySymbol="fa fa-star-o fa-x rating-color"
                                        fullSymbol="fa fa-star fa-x rating-color"
                                    />
                                </div>
                            </Card.Body>
                        </Card>

                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div style={{ backgroundColor: '#deeeff', padding: '25px', borderRadius: '8px' }}>
                        <h4 className="text-center fw-bold">Shipping</h4>
                        <div className="line mx-auto" style={{ borderBottom: '3px solid #ff7ca1', width: '15%', marginBottom: '10px' }}></div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} className="w-100 mb-3 p-1 form-input" {...register("displayName", { required: true, maxLength: 20 })} />
                            <br />
                            <input defaultValue={user.email} className="w-100 mb-3 p-1 form-input" {...register("email")} />
                            <br />
                            <input placeholder="address" type="text" className="w-100 mb-3 p-1 form-input" {...register("address")} />
                            <br />
                            <input placeholder="phone" type="number" className="w-100 mb-3 p-1 form-input" {...register("phone")} />
                            <br />

                            <input className="btn-custom rounded-pill" type="submit" />
                        </form>
                    </div>
                    <Pay productName={product.name}></Pay>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;