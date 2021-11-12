import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import useAuth from '../../Context/useAuth';
import userImage from '../../../images/user.jpg'
import AddProduct from '../AddProduct/AddProduct';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';




const Dashboard = () => {
    const { user, admin, handleSignOut } = useAuth();
    let { path, url } = useRouteMatch();
    const [display, setDisplay] = useState({});
    const displayBlock = { display: 'block' };
    const displayNone = { display: 'none' };
    const btnClose = () => {
        setDisplay(displayNone);
    }
    const btnOpen = () => {
        setDisplay(displayBlock);
    };
    console.log(admin)
    return (
        <div>
            <div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left bg" style={display} id="mySidebar">
                <button className="w3-bar-item w3-button w3-large w3-hide-large" onClick={btnClose}>Close &times;</button>

                <div>
                    <div style={{ height: '120px', width: '120px', padding: '15px', margin: 'auto' }}>
                        <img style={{ width: '100%', borderRadius: '50%' }} src={user?.photoURL === null ? userImage : user?.photoURL} alt="" />
                    </div>
                    <h6 className="text-center fw-bold">{user?.displayName}</h6>
                    {admin && <p className="text-center fw-bold text-white bg-success d-inline px-3 py-1 ms-5 rounded-pill">admin</p>}
                </div>

                <Link to="/home" className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-home"></i>
                        <h6 className="ms-4">Home</h6>
                    </div>
                </Link>
                <Link to={`${url}`} className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-clipboard-list"></i>
                        <h6 className="ms-4">My orders</h6>
                    </div>
                </Link>
                <Link to={`${url}/review`} className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-pen-square"></i>
                        <h6 className="ms-4">Review</h6>
                    </div>
                </Link>
                <Link to={`${url}/payment`} className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-money-check-alt"></i>
                        <h6 className="ms-4">Pay</h6>
                    </div>
                </Link>
                {admin &&
                    <div>
                        <Link to={`${url}/makeAdmin`} className="w3-bar-item w3-button side-link">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-user-shield"></i>
                                <h6 className="ms-4">Make Admin</h6>
                            </div>
                        </Link>
                        <Link to={`${url}/manageOrders`} className="w3-bar-item w3-button side-link">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-cogs"></i>
                                <h6 className="ms-4">Manage Orders</h6>
                            </div>
                        </Link>
                        <Link to={`${url}/addProduct`} className="w3-bar-item w3-button side-link">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-plus-circle"></i>
                                <h6 className="ms-4">Add Product</h6>
                            </div>
                        </Link>
                    </div>
                }
                <Link to="#" className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-sign-out-alt"></i>
                        <button onClick={handleSignOut} className="border-0 ms-4 fw-bold" style={{ backgroundColor: 'transparent' }}>Log Out</button>
                    </div>
                </Link>
            </div>

            <div className="w3-main" style={{ marginLeft: '200px' }}>
                <div style={{ color: '#14a6d0' }}>
                    <button style={{ border: '2px solid grey', color: 'grey', borderRadius: '6px' }} className="w3-button w3-xlarge w3-hide-large" onClick={btnOpen}>&#9776;</button>
                    <div className="w3-container shadow-sm">
                        <h3 className="text-center fw-bold my-3">Dashboard</h3>
                    </div>
                </div>

                <div className="w3-container mt-3">
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Pay></Pay>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                    </Switch>
                </div>

            </div>
        </div >
    );
};

export default Dashboard;