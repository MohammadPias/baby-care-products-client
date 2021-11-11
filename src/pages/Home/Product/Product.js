import React from 'react';
import { Card, Col } from 'react-bootstrap';

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
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;