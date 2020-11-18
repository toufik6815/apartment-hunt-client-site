import React from 'react';
import { Link } from 'react-router-dom';

const ApartmentBoxDetail = ({ apartment }) => {
    return (
        <section className='apartment_box_container col-md-4 col-12 col-sm-12'>
            <div class=" d-flex">
                <div class="box">
                    <img src={apartment.img} class="" alt="..." />
                    <div class="box_body">
                        <h5 class="box-title">{apartment.title}</h5>
                        <p class="box_location"><i class="fa fa-map-marker" aria-hidden="true"></i>{apartment.location}</p>
                    </div>
                    <div className='roomNo d-flex justify-content-between'>
                        <span><i class="fa fa-bed" aria-hidden="true"></i>{apartment.badRoom}</span>
                        <span><i class="fa fa-bath" aria-hidden="true"></i>{apartment.bathRoom}</span>
                    </div>
                    <div className='price d-flex justify-content-between'>
                        <span>${apartment.price}</span>
                        <Link to={`/room/${apartment.id}`}><button>View Details</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApartmentBoxDetail;