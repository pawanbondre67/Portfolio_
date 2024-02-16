import React from 'react'
import {TypeAnimation} from 'react-type-animation'

const Data = () => {

  
  return (
     
    <div className="home__data">
        <h1 className="home__title">Pawan Bondre </h1>
        <h3 className="home__subtitle">
          {" "}
          <TypeAnimation
          className="font-bold"
          sequence={[
            "Frontend Websites",
            2000,
            "Backend Servers",
            2000,
            "Learner",
            2000,
          ]}
          wrapper="span"
          speed={3}
          repeat={Infinity}
        />
        </h3>

    
        <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <a href="#contact" className="button button--flex"> 
        Say Helloo 
        </a>
    </div>
  )
}

export default Data