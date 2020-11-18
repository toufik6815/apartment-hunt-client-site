import React from 'react';

const ServicesBoxDetail = ({serviceBox}) => {
    console.log(serviceBox);
    return (
        <section>
            <main>
                <div className='services_container'>
                    <img src={serviceBox.img} alt=''/>
                        <h4>{serviceBox.title}</h4>
                         <p>{serviceBox.description}</p>
                </div>
            </main>
        </section>
    );
};

export default ServicesBoxDetail;