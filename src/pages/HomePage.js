import Main from '../Components/ServiceTab/Main'
import Difference from '../Components/ServiceTab/Difference'
import Benefits from '../Components/ServiceTab/Benefits'
import Browse from '../Components/ServiceTab/Browse/Browse'
import Feedback from '../Components/ServiceTab/Feedback'
import Partners from '../Components/ServiceTab/Partners'
import Footer from '../Components/ServiceTab/Footer'
import SomeInfo from '../Components/ServiceTab/SomeInfo/SomeInfo'
import TypeOfService from '../Components/ServiceTab/ServicesTypes/TypeOfService'

function HomePage() {
  return (
    <div>
      <Main />
      <SomeInfo />
      <TypeOfService />
      <Difference />
      <Benefits />
      <Browse />
      <Feedback />
      <Partners />
      <Footer />
    </div>
  )
}

export default HomePage
