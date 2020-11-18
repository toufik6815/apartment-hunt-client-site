import React from 'react';
import './ApartmentBox.scss';
import Washington from '../../../../image/images/Rectangle 394.png';
import Avenue from '../../../../image/images/Rectangle 396.png';
import Rectangle from '../../../../image/images/Rectangle 403.png';
import ApartmentBoxDetail from '../ApartmentBoxDetail/ApartmentBoxDetail';

const boxData = [
    {
        id: 1,
        title: 'Washington Avenue',
        location: 'Nasirabad H/S, Chattogram',
        badRoom: '3 Bedrooms',
        bathRoom: '2 Bathroom',
        price: 130,
        img: Washington
    },
    {
        id: 2,
        title: 'Washington Avenue',
        location: 'Nasirabad H/S, Chattogram',
        badRoom: '3 Bedrooms',
        bathRoom: '2 Bathroom',
        price: 130,
        img: Avenue
    },
    {
        id: 3,
        title: 'Washington Avenue',
        location: 'Nasirabad H/S, Chattogram',
        badRoom: '3 Bedrooms',
        bathRoom: '2 Bathroom',
        price: 130,
        img: Rectangle
    }
]

const ApartmentBox = () => {
    return (
      <div className='container'>
            <div className="row">
            {
                boxData.map(apartment => <ApartmentBoxDetail apartment={apartment}></ApartmentBoxDetail>)
            }
        </div>
      </div>
    );
};

export default ApartmentBox;