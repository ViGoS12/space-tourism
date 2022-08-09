import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../../assets/shared/logo.svg'
import { memo } from 'react'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={logo} alt=''></img>
        <div className={styles.header__menu}>
          <div className={styles.header__line} />
          <ul className={styles.header__list}>
            <li className={styles.header__item}>
              <Link to='/'>
                <span>00</span> HOME
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link to='/destination'>
                <span>01</span> DESTINATION
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link to='/crew'>
                <span>02</span> CREW
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link to='/technology'>
                <span>03</span> TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
