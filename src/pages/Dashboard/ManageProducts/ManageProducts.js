import React from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import useProducts from '../../Hooks/useProducts';

const ManageProducts = () => {
    const { products, setProducts } = useProducts();
    const { loding } = useAuth();
    if (loding) {
        return <div className="d-flex justify-content-center"><Spinner animation="border" /></div>
    }
    // delete order
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?")
        if (proceed) {
            fetch(`https://cryptic-wildwood-10368.herokuapp.com/products?id=${id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        alert('Deleted Successfully')
                        const newProducts = products?.filter(order => order?._id !== id)
                        setProducts(newProducts);
                    }
                })
        }
    };
    return (
        <>
            {products?.length === 0 ?
                <div className="d-flex justify-content-center"><Spinner animation="border" /></div>
                :
                <Container>
                    <h2 className="text-center fw-bold mt-5">Spacial Holiday <br /> Offer Products</h2>
                    <div className="line mx-auto" style={{ borderBottom: '3px solid #ff7ca1', width: '12%' }}></div>

                    <Row xs={1} md={3} lg={4} className="g-4 mt-4">
                        {products?.map(product =>
                            <Col key={product._id}>
                                <Card>
                                    <Card.Img variant="top" src={product?.img} />
                                    <Card.Body>
                                        <Card.Title>{product?.name}</Card.Title>
                                        <Card.Text className="text-justify">
                                            {product?.info?.slice(0, 60)}
                                        </Card.Text>
                                        <h6>Price: ${product?.price}</h6>
                                        <Button onClick={() => handleDelete(product?._id)} className="btn-custom rounded-pill w-50 mt-1 mb-3">delete</Button>
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

export default ManageProducts;