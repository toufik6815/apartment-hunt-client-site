import React from 'react';
import FooterContainer from '../FooterContainer/FooterContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss'

const Footer = () => {
    const adress = [
        { name: "H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka, Bangladesh." },
        { name: "Phone: +880 1881098383" },
        { name: "E-mail: cgsaleh83@gmail.com" },
    ]
    const Branch = [
        { name: "Comilla Kandir-Par" },
        { name: "Dhaka Motigil" },
        { name: "Rajshahi kotari-Para" },
        { name: "Chittagong Hali-Shohor" },
    ]
    const services = [
        { name: "Web Development" },
        { name: "Grapich Design" },
        { name: "Desigital marketing" },
        { name: "SEO" }
    ]

    const about = [
        { name: 'We are the top real estate  agency in Sydney, with agents  available to answer any question 24/7.' }
    ]
    return (
        <footer className='footer-area clear-both text-left'>
            <div className='container pt-5'>
                <div className='row py-5'>
                    <FooterContainer key={1} menuTitle={<i class="fa fa-map-marker" aria-hidden="true"><span>location</span></i>} menuItem={adress}></FooterContainer>
                    <FooterContainer key={1} menuTitle={'Our Brance'} menuItem={Branch}></FooterContainer>
                    <FooterContainer key={1} menuTitle={'services'} menuItem={services}></FooterContainer>
                    <FooterContainer key={1} menuTitle={'About us'} menuItem={about}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/sajjat8383" target="_blank"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="https://github.com/cgsaleh83" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/sajjat8383/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                        </ul>
                    </FooterContainer>
                </div>
                <div className="copyRight text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved By <a href='https://protfolio-4a422.web.app/' target='_blank'>Sajjat Hossain</a> </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;