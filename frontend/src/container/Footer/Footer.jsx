import React from 'react';
import './Footer.scss';
import {images} from '../../constants';

const Footer=()=>{
    return(
        <div className='app__footer'>
            <div className='app__footer-info'>
            <div className='app__footer-parent'>
                <p className='app__footer-title'>Parent company</p>
                <img src={images.logo1} />
                <p>Quillhash delivers enterprise grade blockchain technology to leading companies worldwide.</p>
            </div>
            <div className='app__footer-explore'>
                <p className='app__footer-title'>Exlpore</p>
                <ul>
                    <li>Careers</li>
                    <li>Courses</li>
                    <li>Blockchain Security CTF</li>
                    <li>QuillAudits Partner Program</li>
                    <li>Referral Program</li>
                </ul>
            </div>
            <div className='app__footer-services'>
                <p className='app__footer-title'> Services</p>
                <ul>
                    <li>Smart Contract Auditing</li>
                    <li>Blockchain Pen Testing</li>
                    <li>Due Diligence</li>
                </ul>
            </div>
            <div className='app__footer-contact'>
                <p className='app__footer-title'>Contact us</p>
                <p>LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near Sikanderpur DLF Phase1, Sector 28, Gurugram, Haryana - 122002</p>
            </div>
        </div>
        <div className='app__footer-social'>
            <p>Join our Journey</p>
            <div>
                <img src={images.instagram} />
                <img src={images.facebook} />
                <img src={images.linkedin} />
                <img src={images.discord} />
                <img src={images.youtube} />
                <img src={images.twitter} />
            </div>
        </div>
        <div className='app__footer-cc'>
            <p>All Rights Reserved. © Copyright 2022. QuillHash Technologies Private Limited</p>
        </div>
        </div>
    )
}

export default Footer