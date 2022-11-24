import React from 'react';
import './About.scss';
import {images} from '../../constants';
import Lottie from "lottie-react";
//import {HiMenuAlt4,HiX} from 'react-icons/hi';
//import {motion} from 'framer-motion';



const About = () => {
  
  return (
    <div className='background-set'>
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo1} alt='Logo' />
      </div>
      <ul className='app__navbar-links'>
        <li><a href ={"#Audit"}>Audit Service</a></li>
        <li><a href ={"#pricing"}>Pricing</a></li>
        <li><a href ={"#Audit"}>Blog</a></li>
        <li><a href ={"#Audit"}>Research</a></li>
      </ul>
      <ul className='app__navbar-buttons'>
      <li><a href ={"#Audit"}>Portfolio</a></li>
      <li><a href ={"#Audit"}>Request a Demo</a></li>
      </ul>
    </nav>


    <div className="app__header app__flex">
      <div className='app__header-intro'>
        <div className='app__header-intro-left'>
          <p className='app__header-intro-left-main'>
          Emerging Web3 Ventures Trust Our Smart Contract Audits & Diligence Services
          </p>
          <p className='app__header-intro-left-sub'>
          QuillAudits, Making web3 a safer place
          </p>
          <div className='app__header-intro-left-button'>
            <button>Request Free Quote</button>
            <button>Explore Session</button>
          </div>

        </div>
        <div className='app__header-intro-right'>
         <Lottie animationData={images.animation1} />
        </div>
      </div>
    </div>
    <div className='app__header-stats'>
      <div className='app__header-stats-sub'>
        <p>$12.8B</p>
        <text>Amount Lost To DeFi Hacks in 2021</text>
        </div>
      <div className='app__header-stats-sub'>
        <p>600K</p>
        <text>Lines of Codes Secured by QuillAudits</text>
      </div>
      <div className='app__header-stats-sub'>
        <p>$14.6B</p>
        <text>Amount Protected By QuillAudits</text>
      </div>
    </div>
    </div>
  )
}
//navbar done
export default About