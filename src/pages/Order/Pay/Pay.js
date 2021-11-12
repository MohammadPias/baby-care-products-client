import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';


const Pay = ({ productName }) => {
    const { user } = useAuth();
    return (
        <div style={{ backgroundColor: '#deeeff', padding: '25px', borderRadius: '8px', margin: '25px 0' }}>
            <h4 className="text-center fw-bold">Make Payment</h4>
            <div className="line mx-auto" style={{ borderBottom: '3px solid #ff7ca1', width: '25%', marginBottom: '10px' }}></div>
            <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control type="text" defaultValue={user?.displayName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Control type="email" defaultValue={user?.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Control placeholder="product name" defaultValue={productName} />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Credit Card" />
                    <Form.Check type="checkbox" label="Paypal" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Control type="number" placeholder="Card Number" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="number" placeholder="DD/MM" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="number" placeholder="CVC" />
                    </Form.Group>
                </Row>
                <Button className="btn-custom rounded-pill">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Pay;