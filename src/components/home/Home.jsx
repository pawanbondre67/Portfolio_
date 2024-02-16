import React from 'react'
import './home.css'
import Socials from './Socials';
import Data from './Data';
import ScrollDown from './ScrollDown';
const Home = () => {
  return (
    <>
      <section className="home section " id="home" >
        <div className="home__container container grid" >
            <div className="home__content grid">
                <Socials/>
                
                 <div className="home__img"></div>
                 
                 <Data/>
            </div>
            <ScrollDown/>
        </div>
      </section>
        
         
          
    
    
    
    
    </>

  )
}

export default Home;