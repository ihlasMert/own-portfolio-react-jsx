import React from 'react'
import "./hero-section.css"
import {Container,Row,Col} from "reactstrap"
import heroImg from "../../../assets/image.png"

const HeroSection = () => {
  return (
    <section className='hero__section' id='home'>
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className='hero__content'>
                        <p>Welcome to my world!</p>
                        <h5>Hi</h5>
                        <h2 className='hero-title'>I am <span>İhlas Mert</span></h2>
                        <p>Lorem23232</p>
                        <div className='hero__btns d-flex align-items-center gap-4'>
                            <button className='btn'><a href='#'>Hire Me</a></button>
                            <button className='btn-hire'>Contact</button>
                        </div>
                    </div>
                </Col>
                <Col lg="6" md="6">
                    <div className='hero__img'>
                        <img src={heroImg} alt='name' className='w-100'/>
                        <div></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection