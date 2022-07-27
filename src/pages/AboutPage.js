import React from 'react'
import AboutHeader from '../Components/ServiceTab/AboutPage/AboutHeader'
import FirstC from '../Components/ServiceTab/AboutPage/FirstC'
import Simple1 from '../Components/ServiceTab/AboutPage/Simple1'
import SecondC from '../Components/ServiceTab/AboutPage/SecondC'
import Simple2 from '../Components/ServiceTab/AboutPage/Simple2'
import Partners from '../Components/ServiceTab/Partners'
import Footer from '../Components/ServiceTab/Footer'
import Videos from '../Components/ServiceTab/AboutPage/Videos'

function AboutPage() {
  return (
    <div>
        <AboutHeader title={'ABOUT US'} from={'Home'} link={'/'} to={'About Us'} />
        <FirstC />
        <Simple1 />
        <SecondC />
        <Simple2 />
        <Videos />
        <Partners />
        <Footer />
    </div>
  )
}

export default AboutPage