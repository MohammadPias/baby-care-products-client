import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import baby from '../../../images/baby.png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center">
                <Row style={{ marginTop: '10px' }}>
                    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                        <div style={{ minWidth: "370px", padding: '25px' }}>
                            <h1 className="fw-bold">A Cozy Haven <br /> for Babies of All Ages.</h1>
                            <p> We provide an all-inclusive, safe, and caring environment for children. Our facilities are designed like home to feel like home.Helping your child develop and learn through fun and creativity.</p>
                            <Link to="/products"><Button className="btn-custom rounded-pill">Explore</Button></Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center px-5">
                        <img style={{ width: '100%' }} src={baby} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;