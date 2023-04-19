import React,{Fragment} from 'react'
import Header from "../Header/Header"
import HeaderSection from "../Header/hero-section/HeroSection"
import About from '../about/about'


const Layout = () => {
  return (
    <Fragment>
      <Header/> 
      <HeaderSection/>
      <About/>
    </Fragment>
  )
}

export default Layout