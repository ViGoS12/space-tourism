import styles from './scss/Home.module.scss'
import logo from '../assets/shared/logo.svg'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Home = () => {
  return (
    <div className={styles.home}>
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
      <div className={styles.content}>
        <div className={styles.content__leftside}>
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.content__rightside}>
          <button className={styles.content__button}>EXPLORE</button>
        </div>
      </div>
    </div>
  )
}

export default Home
