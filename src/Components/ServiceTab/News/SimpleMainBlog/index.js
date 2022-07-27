import styles from './index.module.scss'

function index({ title, date, img, text }) {
  return (
    <div className={`${styles.parent}`}>
      <div className={styles.imgParent}>
        <img src={img} alt="Blog 1" />
      </div>
      <div className='p-3'>
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
      </div>
    </div>
  )
}

export default index
