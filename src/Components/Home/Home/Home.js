import React from 'react';
import Navbar from '../../ShareComponents/Navbar/Navbar';
import Apartment from '../Apartment/Apartment/Apartment';
import Footer from '../Footer/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services/Services';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Apartment></Apartment>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;