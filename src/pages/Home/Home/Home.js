import React from 'react';
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
        </div>
    );
};

export default Home;