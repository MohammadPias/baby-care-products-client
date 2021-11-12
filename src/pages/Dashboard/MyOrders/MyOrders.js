import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const email = user?.email;
    console.log(user)
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${email}`, { method: "GET" })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    // delete order
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?")
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        alert('Deleted Successfully')
                        const newOrders = orders?.filter(order => order?._id !== id)
                        setOrders(newOrders);
                    }
                })
        }
    };
    return (
        <div>
            <h4 className="text-center fw-bold">My Orders</h4>
            <div className="line mx-auto mb-3" style={{ borderBottom: '3px solid #ff7ca1', width: '8%' }}></div>
            <Row xs={1} md={2} lg={4} className="gap-3">
                {orders?.map(order =>
                    <Col key={order._id}>
                        <Card style={{ maxWidth: '370px', margin: 'auto' }}>
                            <Card.Body>
                                <div style={{ height: '120px', width: '120px', padding: '15px', margin: 'auto' }}>
                                    <img style={{ width: '100%', borderRadius: '50%', border: '1px solid grey', padding: '5px' }} src={order?.product?.img} alt="" />
                                </div>
                                <div>
                                    <h6 className="fw-bold">{order?.product?.name}</h6>
                                    <h6 className="fw-bold">Status: <span className={order?.status === 'approved' ? 'text-success' : 'text-danger'}>{order?.status === 'approved' ? order?.status : 'pending'}</span> </h6>
                                </div>
                                <Card.Text>
                                    {order?.product?.info.slice(0, 120)}
                                </Card.Text>
                                <Button onClick={() => handleDelete(order?._id)} className="btn-custom rounded-pill">Cancel</Button>
                            </Card.Body>
                        </Card>
                    </Col>)}
            </Row>
        </div>
    );
};

export default MyOrders;