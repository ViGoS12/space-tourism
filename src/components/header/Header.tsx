import classNames from 'classnames'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../../assets/shared/logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.conteiner}>
        <img src={logo} alt=''></img>
        <div className={styles.menu}>
          <div className={styles.menu__line}></div>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link
                to='/'
                className={classNames(
                  styles.menu__selected,
                  styles.menu__link
                )}>
                <span>00</span> HOME
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to='/destination' className={styles.menu__link}>
                <span>01</span> DESTINATION
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to='/crew' className={styles.menu__link}>
                <span>02</span> CREW
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link to='/technology' className={styles.menu__link}>
                <span>03</span> TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
