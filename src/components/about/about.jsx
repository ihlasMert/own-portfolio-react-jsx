import React,{useState} from 'react'
import "./About.css"
import {Container,Row,Col} from "reactstrap"
import aboutImage from "../../assets/image.png"
import Educiation from './Educiation'



const About = () => {
const [filterAbout, setFilterAbout] = useState("ABOUT")
  return (
    <section id="about">

        <Container>
            <Row>
                <Col lg="12" className='mb-2'><h2>About Me</h2> </Col>
                <Col lg="4" md="3">
                    <div className='about__btns d-flex flex-column align-item-center'>
                        <button className='about__btn-active' onClick={()=>setFilterAbout("ABOUT")}>About me</button>
                        <button className='about__btn' onClick={()=>setFilterAbout("EDUCATION")}>Education</button>
                        <button className='about__btn' onClick={()=>setFilterAbout("SKİLLS")}>Skills</button>
                        <button className='about__btn'>Awards</button>
                    </div>
                </Col>
                <Col lg="8" md="9">
                    {filterAbout==="ABOUT" && <div className='about__content__wrapper d-flex gap-5'>
                        <div className='about__img w-25'>
                            <img src={aboutImage} alt="" className='w-100'/>
                        </div>

 <div className='about__content w-75'>
                            <h2>I am İhlas</h2>
                            <p>lorem20 lorem210 lorem 21sdkjfnsdfnsdlcsdlkcsdcsldc</p>
                            <div className='social__links'>
                                <h6>Connect with me:</h6>
                                <span><a href='#'><i class="ri-facebook-circle-line"></i></a></span>
                                <span><a href='#'><i class="ri-facebook-circle-line"></i></a></span>
                                <span><a href='#'><i class="ri-facebook-circle-line"></i></a></span>
                                <span><a href='#'><i class="ri-facebook-circle-line"></i></a></span>
                            </div>
                        </div>
                    </div>}
               {filterAbout ===  "EDUCATION" && <Educiation/>  }
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About