import React from 'react';
import './Wwah.scss';
import {images} from '../../constants';

const Wwah=()=>{
    return(
        <div className='app__wwah'>
            <div className='app__wwah-left'>
                <div>WHY WE ARE HERE?</div>
                <p>What is the Need of Smart Contract Audit?</p>
                <button>Talk to an Expert</button>
            </div>
            <div className='app__wwah-right'>
                <div className='app__wwah-right-s1'>Smart Contract Audits Build Social Authority</div>
                <div className='app__wwah-right-s2'>Only 52.7% of the Exploited Web3 Projects were Audited.</div>
                <div className='app__wwah-right-s3'>47.3% of the Web3 Hacks in First Half of 2022 were due to Smart Contract Vulnerabilities.</div>
                <div className='app__wwah-right-s4'>Helps in Earning Users/Investors Trust for the Product</div>
                <div className='app__wwah-right-s5'>Helps in Earning Users/Investors Trust for the Product</div>
            </div>
        </div>
    )
}

export default Wwah;