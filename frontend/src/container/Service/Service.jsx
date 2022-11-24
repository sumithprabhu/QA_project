import React from 'react';
import './Service.scss';
import {images} from '../../constants';
import Lottie from "lottie-react";

const Service= ()=>{
    return(
        <div className='app__service'>
            <div className='app__service-temp'>
                <div className='app__service-temp-img'><Lottie className='app__service-temp-img' animationData={images.animation3}/></div>
                <div className='app__service-temp-cont'>
                    <div className='app__service-temp-cont1'>SERVICE</div>
                    <div className='app__service-temp-cont2'>Smart Contract Auditor</div>
                    <p>Our Audit Process for smart contract is based on the comprehensive approach we follow to investigate the code for security flaws and potential vulnerabilities.</p>
                    <ul>
                        <li className='app__service-temp-cont-logo'><img src={images.ethereum} /> Ethereum</li>
                        <li className='app__service-temp-cont-logo'><img src={images.polygon} /> Polygon</li>
                        <li className='app__service-temp-cont-logo'><img src={images.binance} /> BSC</li>
                        <li className='app__service-temp-cont-logo'><img src={images.sol} /> Solana</li>
                        <li className='app__service-temp-cont-logo'><img src={images.ethereum} /> EOS</li>
                    </ul>
                    <button>Explore</button>
                </div>
            </div>
            <div className='app__service-temp'>
                <div className='app__service-temp-cont'>
                    <div className='app__service-temp-cont1'>SERVICE</div>
                    <div className='app__service-temp-cont2'>Blockchain Penetration Testing</div>
                    <p>QuillAudits proven strategy to tackle vulnerabilities specific to blockchain technology comes with a mix-blend of conventional pentesting approach and dynamic blockchain analysis.</p>
                    <button>Explore</button>
                </div>
                <div className='app__service-temp-img'><Lottie className='app__service-temp-img' animationData={images.animation2}/></div>
            </div>
            <div className='app__service-temp'>
                <div className='app__service-temp-img'><Lottie className='app__service-temp-img' animationData={images.animation3}/></div>
                <div className='app__service-temp-cont'>
                    <div className='app__service-temp-cont1'>SERVICE</div>
                    <div className='app__service-temp-cont2'>Due Diligence</div>
                    <p>QuillAudits acknowledges the significant threats involved in smart contracts, which can lead to many critical possibilities.</p>
                    <button>Explore</button>
                </div>
            </div>  
            <div className='app__security '>
                <div className='app__security-title'>THE SECURITY</div>
                <div className='app__security-pas'>How We Secure Your Web3 Project</div>
                <img src={images.security}/>
            </div>
        </div>
       
    )
}
export default Service