import { NavLink } from 'react-router-dom'
import featuredpost from './index.module.scss'

const index = ({ category, title, desc, toLink }) => {
  return (
    <div className={`${featuredpost.featured}`}>
      <NavLink to={toLink} className={featuredpost.link}>
        <p className={featuredpost.featuredRed}>
          <b>{category}</b>
        </p>
        <p className={featuredpost.featuredTitle}>
          <b>{title}</b>
        </p>
        <p className={featuredpost.featuredText}>
          {desc}
        </p>
      </NavLink>
    </div>
  )
}

export default index
