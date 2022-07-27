import benefit from './index.module.scss'

function index({title, description, img, imgDesc}) {
  return (
    <div className={`my-3 col-12 col-md-6 col-lg-6 col-xl-3 ${benefit.parent}`}>
      <img className={benefit.img} src={img} alt={imgDesc} />
      <h4 className={benefit.title}>
        <b>{title}</b>
      </h4>
      <p className={benefit.description}>{description}</p>
    </div>
  )
}

export default index
