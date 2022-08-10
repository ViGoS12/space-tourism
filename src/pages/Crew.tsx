import Header from '../components/header'

import styles from './scss/Crew.module.scss'

import data from '../data/data.json'

import { memo, useCallback, useState } from 'react'

const Crew: React.FC = () => {
  const [crewId, setCrewId] = useState(0)
  const crewInfo = data.crew

  const onChangeCrew = useCallback((index: number) => {
    setCrewId(index)
  }, [])

  return (
    <div className={styles.crew}>
      <Header />
      <div className={styles.crew__container}>
        <div className={styles.crew__leftside}>
          <h3 className={styles.crew__heading}>
            <span>02</span> Meet your crew
          </h3>
          <div className={styles.crew__description}>
            <h2 className={styles.crew__subtitle}>{crewInfo[crewId].role}</h2>
            <h1 className={styles.crew__title}>{crewInfo[crewId].name}</h1>
            <p className={styles.crew__text}>{crewInfo[crewId].bio}</p>
          </div>
          <ul className={styles.crew__list}>
            {crewInfo.map((info, idx) => (
              <button
                key={info.name}
                className={styles.crew__item}
                onClick={() => {
                  onChangeCrew(idx)
                }}></button>
            ))}
          </ul>
        </div>
        <div className={styles.crew__rightside}>
          <img
            className={styles.crew__img}
            src={crewInfo[crewId].images.webp}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default memo(Crew)
