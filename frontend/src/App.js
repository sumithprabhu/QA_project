import React from 'react'

//import {About,Footer,Header,Work,Skills} from './container/index';
import {About,Service,Footer} from './container/index'
import './App.css'

const App = () => {
  return (
    <div className='app'>
    <About />
    <Service />
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