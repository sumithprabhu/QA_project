import React from 'react';
import './Nl.scss';
import {images} from '../../constants';

const Nl=()=>{
    return(
        <div className='app__nl' id='nl'>
            <div className='app__nl-sub'>
                <div className='app__nl-sub-left'>
                    <img src={images.logo3} />
                    <p>DeFi & NFT Hacks, CTFs, and Blockchain Security Insights Straight to your Inbox.</p>
                    <p>Explore our weekly newsletter: HashingBits. Stay updated on everything we’re publishing. Stand a step ahead.</p>
                    <input placeholder='youremail@gmail.com'></input>
                </div>
                <div className='app__nl-sub-right'>
                    <img className='app__nl-sub-right-back' src={images.email}/>
                    <img className='app__nl-sub-right-front' src={images.email}/>
                </div>
            </div>
            <div className='app__nl-join'>
                <div className='app__nl-join-cont'>
                    <div className='app__nl-join-cont-left'>
                        <p className='app__nl-join-cont-left-title'>
                        Join Hands With us to secure Web3 Together
                        </p>
                        <p className='app__nl-join-cont-left-desc'>
                        Help us in our journey to secure web3 by joining our team of talented individuals spread across the globe.
                        </p>
                        <button>Apply Now</button>
                    </div>
                    <div className='app__nl-join-cont-right'>
                        <img src={images.join} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nl;