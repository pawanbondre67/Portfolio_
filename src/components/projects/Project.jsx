import React from 'react'
import './project.css'
import HTML from '../../assets/html2.jpg'

const Project = () => {
  return (
    <section className="project section" id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most recent work</span>

        <div className="project__container container grid">

                <div className="project__card grid">
                <img src={HTML} alt="" className="project__img"/>
                    <h3 className="project__title">Project 1</h3>
                    <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
                    <a href="#" className=" project__button">
                        Demo
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </a>
                </div>


                <div className="project__card grid">
                <img src={HTML} alt="" className="project__img"/>
                    <h3 className="project__title">Project 2</h3>
                    <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
                    <a href="#" className=" project__button">
                        Demo
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </a>
                </div>


                <div className="project__card grid">
                <img src={HTML} alt="" className="project__img"/>
                    <h3 className="project__title">Project 3</h3>
                    <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
                    <a href="#" className=" project__button">
                        Demo
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </a>
                </div>


                <div className="project__card grid">
                <img src={HTML} alt="" className="project__img"/>
                    <h3 className="project__title">Project 4</h3>
                    <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
                    <a href="#" className=" project__button">
                        Demo
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </a>
                </div>




                <div className="project__card grid">
                <img src={HTML} alt="" className="project__img"/>
                    <h3 className="project__title">Project 5</h3>
                    <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
                    <a href="#" className=" project__button">
                        Demo
                        <i className="uil uil-arrow-right project__button-icon"></i>
                    </a>
                </div>




            </div>

    </section>
  )
}

export default Project