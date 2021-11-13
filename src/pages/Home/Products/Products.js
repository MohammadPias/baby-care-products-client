import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const { products } = useProducts();
    return (
        <>
            {products?.length === 0 ?
                <div className="d-flex justify-content-center"><Spinner animation="border" /></div>
                :
                <Container>
                    <h2 className="text-center fw-bold mt-5">Products</h2>
                    <div className="line mx-auto" style={{ borderBottom: '3px solid #ff7ca1', width: '7%' }}></div>

                    <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                        {
                            products?.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </Row>
                </Container>
            }
        </>
    );
};

export default Products;