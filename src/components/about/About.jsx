import React from 'react';
import "./about.css"
import aboutImg from '../../assets/about.jpeg';
// import Info from './Info';
import CV from '../../assets/cv.pdf';
import leetcode from '../../assets/leetcode.png';

const About = () => {
  return (
    <section className="about section" id='about'>
       <h2 className="section__title"> About me</h2>
       <div className="about__container container grid">
           
            <img src={aboutImg} alt="" className="about__img"/>
           
            <div className="about__data">
                {/* <Info/> */}

                <div className="imglinks grid">
                    <img src={leetcode} alt="" className="leetcode" />
                    <img src={leetcode} alt="" className="leetcode" />
                      <img src={leetcode} alt="" className="leetcode" />
                    
                </div>

             <p className="about__description">I'm a junior front-end developer looking for a new opportunities to grow my skills. I'm a hard-working person, a team player, and I love learning new things.</p>
        
                <a download="" href={CV} className="button button--flex">
                Download CV<i className="uil uil-download-alt button__icon"></i>
                </a>
            </div>

       </div>

    </section>
  )
}

export default About