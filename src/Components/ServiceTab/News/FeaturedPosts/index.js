// import { useState , useEffect } from 'react'
import featuredposts from './index.module.scss'
import FeaturedPost from './FeaturedPost'
import { Navigation } from 'swiper'
// import {instacnce } from '../../../../API/api'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { useTranslation } from 'react-i18next'
import 'swiper/css'

function FeaturedPosts() {


  return (
    <>
      <div className="container-fluid">
        <div className={`row justify-between p-4 mt-5 ${featuredposts.mostPopular}`}>
          <div className="d-flex align-items-center">
            <div className="me-auto">
              <div className={`col d-flex align-items-center ${featuredposts.mostPopularLeft}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                <h4 className='ms-2 pt-1'>
                  <b>
                    Most Popular
                  </b>
                </h4>
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <div className={`col d-flex ${featuredposts.mostPopularRight}`}>
                <button className={`link-light swiperprev ${featuredposts.prevStyle}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </button>
                <button className={`link-light swipernext ${featuredposts.nextStyle}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid pt-3 px-4 ${featuredposts.featuredParent}`}>
        <div className="row">
          <div className="container">
            <Swiper
              slidesPerView={6}
              modules={[Navigation]}
              navigation={{
                prevEl: '.swiperprev',
                nextEl: '.swipernext',
              }}
              breakpoints={{
                423: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                700: {
                  slidesPerView: 4,
                  spaceBetween: 20
                },
                1245: {
                  slidesPerView: 6,
                  spaceBetween: 20
                }
              }}
            >
              <SwiperSlide>
                <FeaturedPost
                  category={'Featured'}
                  title={'The mystery of the home where the Queen was born'}
                  desc={'Her parents had moved into the house, belonging to her Scottish grandparents, the Earl and Countess of Strathmore, only a few weeks before her birth.'}
                  toLink={'blog'} />
              </SwiperSlide>
              <SwiperSlide>
                <FeaturedPost
                  category={'Featured'}
                  title={'weqfqwThe mystery of the home where the Queen was born'}
                  desc={'Her parents had moved into the house, belonging to her Scottish grandparents, the Earl and Countess of Strathmore, only a few weeks before her birth.'}
                  toLink={'blog'} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedPosts
