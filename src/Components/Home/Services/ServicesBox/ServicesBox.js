import React from 'react';
import wideRinge from '../../../../image/Logo/affordable 1.png';
import wideRinge2 from '../../../../image/Logo/apartment 1.png';
import wideRinge3 from '../../../../image/Logo/lessee 1.png';
import ServicesBoxDetail from '../ServicesBoxDetail/ServicesBoxDetail';

const servicesBoxData = [
    {
        id: 1,
        title: 'Wide Range of Properties',
        description: 'With a robust selection of popular properties on hand, as well as leading properties from experts.',
        img: wideRinge
    },
    {
        id: 2,
        title: 'Wide Range of Properties',
        description: 'With a robust selection of popular properties on hand, as well as leading properties from experts.',
        img: wideRinge2
    },
    {
        id: 3,
        title: 'Wide Range of Properties',
        description: 'With a robust selection of popular properties on hand, as well as leading properties from experts.',
        img: wideRinge3
    },
]

const ServicesBox = () => {
    console.log(servicesBoxData);
    return (
        <div className='services_box container'>
            {
                servicesBoxData.map(serviceBox=> <ServicesBoxDetail serviceBox={serviceBox}></ServicesBoxDetail>)
            }
        </div>
    );
};

export default ServicesBox;