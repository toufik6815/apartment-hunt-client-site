import React from 'react';
import './headerMain.css'

const HeaderMain = () => {
    return (
        <section>
            <main className='headerMain_main'>
                <div className='header_main_container'>
                    <h1>FIND YOUR HOUSE RENT</h1>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Find Your Hows..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="input-group-text" id="basic-addon2">Find Now</button>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default HeaderMain;