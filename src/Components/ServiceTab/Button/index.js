import { Link } from 'react-router-dom'
import style from './index.module.scss'

function index({name, link}) {
  return (
    <Link to={link}>
      <button className={style.style}>{name}</button>
    </Link>
  )
}

export default index
