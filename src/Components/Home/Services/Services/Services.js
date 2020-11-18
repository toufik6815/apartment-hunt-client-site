import React from 'react';
import ServicesBox from '../ServicesBox/ServicesBox';
import ServicesHeader from '../ServicesHeader/ServicesHeader';
import './Services.scss'

const Services = () => {
    return (
        <div>
            <ServicesHeader></ServicesHeader>
            <ServicesBox></ServicesBox>
        </div>
    );
};

export default Services;