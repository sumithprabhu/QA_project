import React from 'react';
import './Mention.scss';
import {images} from '../../constants';

const Mention =()=>{
    return (
        <div className='app__mention'>
        <div className='app__mention-title'>MENTION</div>
        <p>As Featured In</p>
        <div className='app__mention-sec'>
            <div  className='app__mention-sec-item'>
                <img src={images.mention1} />
                <p>Read more</p>
            </div>
            <div  className='app__mention-sec-item'>
                <img src={images.mention2} />
                <p>Read more</p>
            </div>
            <div  className='app__mention-sec-item'>
                <img src={images.mention3} />
                <p>Read more</p>
            </div>
            <div  className='app__mention-sec-item'>
                <img src={images.mention4} />
                <p>Read more</p>
            </div>
            <div  className='app__mention-sec-item'>
                <img src={images.mention5} />
                <p>Read more</p>
            </div>
        </div>
        </div>
    )
}

export default Mention;