import React from 'react'
import Slider from '../components/core/homePage/Slider'
import Catagories from '../components/core/homePage/Catagories'
import SellReplairTabs from '../components/core/homePage/SellReplairTabs'
import OurServices from '../components/core/homePage/OurServices'

const HomePage = () => {
  return (
    <div>
      {/* <BottomToTopBtn/> */}
      <Slider/>
      <OurServices/>
      <SellReplairTabs/> 
      <Catagories/>
      {/* <TimeLine/>
      <ProcessFlow/>
      <Testimonial/>
      <Footer/> */}
    </div>
  )
}

export default HomePage
