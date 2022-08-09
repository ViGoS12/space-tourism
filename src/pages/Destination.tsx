import Header from '../components/header'

import styles from './scss/Destination.module.scss'

import data from '../data/data.json'

import { memo, useCallback, useState } from 'react'

const Destination: React.FC = () => {
  const [planetId, setPlanetId] = useState(0)
  const planetInfo = data.destinations

  const onChangePlanet = useCallback((index: number) => {
    setPlanetId(index)
  }, [])

  return (
    <div className={styles.destination}>
      <Header />
      <div className={styles.destination__container}>
        <div className={styles.destination__leftside}>
          <h2 className={styles.destination__subtitle}>
            <span>01</span> Pick your detination
          </h2>
          <img
            src={planetInfo[planetId].images.webp}
            alt=''
            className={styles.destination__img}
          />
        </div>
        <div className={styles.destination__rightside}>
          <ul className={styles.destination__list}>
            {data.destinations.map((planetInfo, idx) => (
              <li
                className={styles.destination__item}
                key={idx}
                onClick={() => onChangePlanet(idx)}>
                {planetInfo.name}
              </li>
            ))}
          </ul>

          <h1 className={styles.destination__title}>
            {planetInfo[planetId].name}
          </h1>

          <p className={styles.destination__text}>
            {planetInfo[planetId].description}
          </p>
          <div className={styles.destination__line} />
          <div className={styles.property}>
            <div className={styles.property__column}>
              <p className={styles.property__subtitle}>avg.distance</p>
              <p className={styles.property__text}>
                {planetInfo[planetId].distance}
              </p>
            </div>
            <div className={styles.property__column}>
              <p className={styles.property__subtitle}>Est. travel time</p>
              <p className={styles.property__text}>
                {planetInfo[planetId].travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Destination)
