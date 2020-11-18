import React from 'react';


const FooterContainer = (props) => {
    return (
        <div className='col-md-3'>
            <h5>{props.menuTitle ? props.menuTitle: ' '}</h5>
            <ul className='list-unStyle mt-4'>
                {
                    props.menuItem.map((item, index) => <li key={index}><p to={item.link} className='text-white'>{item.name}</p></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterContainer;