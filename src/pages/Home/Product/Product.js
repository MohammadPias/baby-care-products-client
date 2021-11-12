import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, info, price, rating, img } = product;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {info}
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
    );
};

export default Product;