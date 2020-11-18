import React from 'react';
import './Apartment.css';
import ApartmentHeader from '../ApartmentHeader/ApartmentHeader';
import ApartmentBox from '../ApartmentBox/ApartmentBox';
import { useParams } from 'react-router-dom';

const Apartment = () => {
    const { title } = useParams()
    return (
        <div>
            <ApartmentHeader></ApartmentHeader>
            <ApartmentBox></ApartmentBox>
    <h1>{title}</h1>
        </div>
    );
};

export default Apartment;