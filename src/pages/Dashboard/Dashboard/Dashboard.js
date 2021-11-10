import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css';




const Dashboard = () => {
    const [display, setDisplay] = useState({});
    const displayBlock = { display: 'block' };
    const displayNone = { display: 'none' };
    const btnClose = () => {
        setDisplay(displayNone);
    }
    const btnOpen = () => {
        setDisplay(displayBlock);
    };
    console.log(display)
    return (
        <div>
            <div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style={display} id="mySidebar">
                <button className="w3-bar-item w3-button w3-large w3-hide-large" onClick={btnClose}>Close &times;</button>
                <Link to="#" className="w3-bar-item w3-button">Link 1</Link>
                <Link to="#" className="w3-bar-item w3-button">Link 2</Link>
                <Link to="#" className="w3-bar-item w3-button">Link 3</Link>
            </div>

            <div className="w3-main" style={{ marginLeft: '200px' }}>
                <div style={{ backgroundColor: "#baddff", color: '#14a6d0' }}>
                    <button style={{ backgroundColor: "#14a6d0", color: 'white' }} className="w3-button w3-xlarge w3-hide-large" onClick={btnOpen}>&#9776;</button>
                    <div className="w3-container">
                        <h1>Dashboard</h1>
                    </div>
                </div>

                <div className="w3-container">
                    <h3>Responsive Sidebar</h3>
                    <p>The sidebar in this example will always be displayed on screens wider than 992px, and hidden on tablets or mobile phones (screens less than 993px wide).</p>
                    <p>On tablets and mobile phones the sidebar is replaced with a menu icon to open the sidebar.</p>
                    <p>The sidebar will overlay of the page content.</p>
                    <p><b>Resize the browser window to see how it works.</b></p>
                </div>

            </div>
        </div >
    );
};

export default Dashboard;