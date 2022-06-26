import Header from '../components/header'
import styles from './scss/Destination.module.scss'
import planet from '../assets/destination/image-moon.png'
import classNames from 'classnames'

const Destination = () => {
  return (
    <div className={styles.destination}>
      <Header />
      <div className={styles.conteiner}>
        <div className={styles.conteiner__leftside}>
          <h2>
            <span>01</span> Pick your detination
          </h2>
          <img src={planet} alt='' className={styles.conteiner__img} />
        </div>
        <div className={styles.conteiner__rightside}>
          <ul className={styles.menu}>
            <li
              className={classNames(styles.menu__item, styles.menu__selected)}>
              Moon
            </li>
            <li className={styles.menu__item}>Mars</li>
            <li className={styles.menu__item}>Europa</li>
            <li className={styles.menu__item}>Titan</li>
          </ul>
          <h1>Moon</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className={styles.line}></div>
          <div className={styles.property}>
            <div className={styles.property__distance}>
              <p>avg.distance</p>
              <p>384,400 km</p>
            </div>
            <div className={styles.property__travel_time}>
              <p>Est. travel time</p>
              <p>3 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
