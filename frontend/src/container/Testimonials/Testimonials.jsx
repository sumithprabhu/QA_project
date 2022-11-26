import React from 'react';
import './Testimonials.scss';
import {images} from '../../constants';

const Testimonials =()=>{
    return (
        <div className='app__testimonial' id='testimonials'>
            <div className='app__testimonial-title'>TESTIMONIALS</div>
            <div className='app__testimonial-desc'>
                <p>What our Clients are saying</p>
                <button>Read more</button>
            </div>
            <div className='app__testimonial-cont'>
                <div className='app__testimonial-item'>
                    <img src={images.stackos}/>
                    <div className='app__testimonial-item-desc'>Very professional and timed delivery. Also very prompt in responses and queries.</div>
                    <div className='app__testimonial-item-title'>Vishnu Korde</div>
                    <div className='app__testimonial-item-post'>CEO, StackOS</div>
                </div>
                <div className='app__testimonial-item'>
                    <img src={images.stackos}/>
                    <div className='app__testimonial-item-desc'>Very professional and timed delivery. Also very prompt in responses and queries.</div>
                    <div className='app__testimonial-item-title'>Vishnu Korde</div>
                    <div className='app__testimonial-item-post'>CEO, StackOS</div>
                </div>
                <div className='app__testimonial-item'>
                    <img src={images.stackos}/>
                    <div className='app__testimonial-item-desc'>Very professional and timed delivery. Also very prompt in responses and queries.</div>
                    <div className='app__testimonial-item-title'>Vishnu Korde</div>
                    <div className='app__testimonial-item-post'>CEO, StackOS</div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;