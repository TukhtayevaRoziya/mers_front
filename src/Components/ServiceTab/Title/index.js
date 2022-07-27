import title from './index.module.scss'

function index({titleName}) {
  return (
    <p className={title.title}>
      <b>{titleName}</b>
    </p>
  )
}

export default index
