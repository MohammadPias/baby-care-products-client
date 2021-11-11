import React from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
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