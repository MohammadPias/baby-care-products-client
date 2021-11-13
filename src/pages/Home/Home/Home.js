import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import EventOffer from '../Event/EventOffer';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeProducts></HomeProducts>
            <EventOffer></EventOffer>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;