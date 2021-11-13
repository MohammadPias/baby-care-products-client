import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import offer1 from '../../../images/offer1.png';
import offer2 from '../../../images/offer2.png';

const EventOffer = () => {
    return (
        <div className='my-5'>
            <h2 className="text-center fw-bold my-2">Special Holiday Offers</h2>
            <div style={{ width: '18%', borderBottom: '3px solid #ff7ca1', margin: 'auto' }}></div>
            <Row xs={1} md={2} className="my-3">
                <Col className="my-2">
                    <Link to="/eventProducts">
                        <img style={{ width: '100%', height: 'auto' }} src={offer1} alt="" />
                    </Link>
                </Col>
                <Col className="my-2">
                    <Link to="/eventProducts">
                        <img style={{ width: '100%' }} src={offer2} alt="" />
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default EventOffer;