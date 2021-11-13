import React from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const EventProducts = () => {
    const { products } = useProducts();
    console.log(products)
    return (
        <>
            {products?.length === 0 ?
                <div className="d-flex justify-content-center"><Spinner animation="border" /></div>
                :
                <Container>
                    <h2 className="text-center fw-bold mt-5">Spacial Holiday <br /> Offer Products</h2>
                    <div className="line mx-auto" style={{ borderBottom: '3px solid #ff7ca1', width: '12%' }}></div>

                    <Row xs={1} md={3} className="g-4 mt-4">
                        {products?.slice(6, 12).map(product =>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={product?.img} />
                                    <Card.Body>
                                        <Card.Title>{product?.name}</Card.Title>
                                        <Card.Text className="text-justify">
                                            {product?.info?.slice(0, 100)}
                                        </Card.Text>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h6>Price: $<del>{product?.price}</del></h6>
                                            <h6>Offer Price: ${product?.price - product?.price * 30 / 100}</h6>

                                        </div>
                                        <p>Rating: <Rating
                                            initialRating={product?.rating}
                                            readonly
                                            emptySymbol="fa fa-star-o fa-x rating-color"
                                            fullSymbol="fa fa-star fa-x rating-color"
                                        /></p>

                                        <Link to={`/order/${product._id}`}><Button className="btn-custom rounded-pill w-50 mt-1 mb-3">Purchase</Button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
            }
        </>
    );
};

export default EventProducts;