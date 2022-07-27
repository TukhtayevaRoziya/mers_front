import customer from './index.module.scss'
import AOS from 'aos'
import { useEffect } from 'react'
function Partners({image, text, author, job}) {
  useEffect(() =>{
    AOS.init()
  })
  return (
    <div className={`container p-5 ${customer.slide}`} data-aos="flip-left">
      <div className="row">
        <div className="order-lg-2 col-12 col-lg-4 d-flex justify-content-center align-items-center">
          <img className={customer.image} src={image} alt={'Customer_Image'} />
        </div>
        <div className="order-lg-1 col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start p-4">
          <p className={customer.feedback}>
            {text}
          </p>
          <p className={`fw-bold ${customer.author}`}>
            {author}
          </p>
          <p className={`fw-bold ${customer.job}`}>
            {job}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Partners
