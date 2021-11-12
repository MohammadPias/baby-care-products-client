import React from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import useProducts from '../../Hooks/useProducts';

const HomeProducts = () => {
    const { products } = useProducts([]);
    const { loding } = useAuth();
    return (
        <>
            {products?.length === 0 ?
                <div className="d-flex justify-content-center"><Spinner animation="border" /></div>
                :
                <Container>
                    <h2 className="text-center fw-bold mt-5">Products</h2>
                    <div className="line mx-auto" style={{ borderBottom: '3px solid #ff7ca1', width: '7%' }}></div>

                    <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                        {products?.slice(0, 6).map(product =>
                            <Col key={product._id}>
                                <Card>
                                    <Card.Img variant="top" src={product.img} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            {product.info}
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
                                        <Link to={`/order/${product._id}`}><Button className="btn-custom rounded-pill w-50 mt-3 mb-3">Purchase</Button></Link>
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

export default HomeProducts;