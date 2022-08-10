import { memo, useCallback, useState } from 'react'

import Header from '../components/header'

import styles from './scss/Technology.module.scss'

import data from '../data/data.json'

const Technology: React.FC = () => {
  const [technologyId, setTechnologyId] = useState(0)
  const technologyInfo = data.technology

  const onChangeTechnology = useCallback((index: number) => {
    setTechnologyId(index)
  }, [])

  return (
    <div className={styles.technology}>
      <Header />
      <div className={styles.technology__container}>
        <div className={styles.technology__leftside}>
          <h3 className={styles.technology__heading}>
            <span>03</span> Space launch 101
          </h3>
          <div className={styles.technology__main}>
            <ul className={styles.technology__list}>
              {technologyInfo.map((info, idx) => (
                <li
                  onClick={() => {
                    onChangeTechnology(idx)
                  }}
                  key={info.name}
                  className={styles.technology__item}>
                  {idx + 1}
                </li>
              ))}
            </ul>
            <div className={styles.technology__description}>
              <h2 className={styles.technology__subtitle}>
                The terminology...
              </h2>
              <h1 className={styles.technology__title}>
                {technologyInfo[technologyId].name}
              </h1>
              <p className={styles.technology__text}>
                {technologyInfo[technologyId].description}
              </p>
            </div>
          </div>
        </div>
        <img
          className={styles.technology__img}
          src={technologyInfo[technologyId].images.portrait}
          alt=''
        />
      </div>
    </div>
  )
}

export default memo(Technology)
