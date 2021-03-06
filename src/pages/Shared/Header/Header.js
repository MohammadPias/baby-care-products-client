import React from 'react';
import topBanner from '../../../images/banner.png';
import Banner from '../../Home/Banner/Banner';
import NavTitle from '../NavTitle/NavTitle';

const Header = () => {
    const homeBanner = {
        background: `url(${topBanner})`,
        minHeight: '500px'
    }
    return (
        <div style={homeBanner}>
            <NavTitle></NavTitle>
            <Banner></Banner>
        </div>
    );
};

export default Header;