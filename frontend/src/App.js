import React from 'react'

//import {About,Footer,Header,Work,Skills} from './container/index';
import {About,Service,Footer,Portfolio,Wwah,Mention,Testimonials,Nl} from './container/index'
import './App.css'

const App = () => {
  return (
    <div className='app'>
    <About />
    <Service />
    <Portfolio />
    <Wwah />
    <Mention />
    <Testimonials />
    <Nl />
    <Footer />
    {/* <Header />
    <About />
    <Work />
    <Skills />
    
    <Footer /> */}
    </div>
  )
}

export default App