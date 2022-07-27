import { Link } from 'react-router-dom'
import styles from './index.module.scss'

function index({ title, date, img, text }) {
  return (
    <div className={`col-12 col-sm-6 col-md-6 col-lg-4 ${styles.parent}`}>
      <div className={styles.imgParent}>
        <Link to="blog" className={styles.link}>
          <img src={img} alt="Blog 1" />
        </Link>
      </div>
      <div className='p-3'>
        <Link to="blog" className={styles.link}>
          <h2 className={`pt-3 pb-1 ${styles.title}`}>
            <b>
              {title}
            </b>
          </h2>
          <p className={styles.date}>
            {date}
          </p>
          <p className={styles.text}>
            {text}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default index
