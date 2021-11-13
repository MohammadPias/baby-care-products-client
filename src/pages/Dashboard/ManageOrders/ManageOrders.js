import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [change, setChange] = useState('');

    useEffect(() => {
        fetch('https://cryptic-wildwood-10368.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [change]);
    // delete order
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?")
        if (proceed) {
            fetch(`https://cryptic-wildwood-10368.herokuapp.com/orders/${id}`, { method: "DELETE" })
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
    // Approve order
    const handleApprove = (id) => {
        console.log(id)
        fetch(`https://cryptic-wildwood-10368.herokuapp.com/orders/${id}`, { method: 'PUT' })
            .then(res => res.json())
            .then(result => setChange(id))

    }
    return (
        <div>
            <h4 className="text-center fw-bold">Manage All Orders</h4>
            <div className="line mx-auto mb-3" style={{ borderBottom: '3px solid #ff7ca1', width: '8%' }}></div>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Product Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((order, index) =>
                        <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order?.email}</td>
                            <td>{order?.displayName}</td>
                            <td>{order?.product?.name}</td>
                            <td>
                                <Button onClick={() => handleDelete(order?._id)} variant="danger" size="sm" className="m-3">
                                    Cancel
                                </Button>
                                <Button onClick={() => handleApprove(order?._id)} variant="success" size="sm">
                                    {order?.status === 'approved' ? <i className="fas fa-check-circle">    {order?.status}</i> : 'Approve'}
                                </Button>
                            </td>
                        </tr>)}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;