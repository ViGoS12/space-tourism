import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

import logo from '../../assets/shared/logo.svg'

import { memo, useContext } from 'react'
import AppContext from '../../context/AppContext'
import classNames from 'classnames'

const menu = [
  {
    number: '00',
    name: 'HOME',
    url: '/',
  },
  {
    number: '01',
    name: 'DESTINATION',
    url: '/destination',
  },
  {
    number: '02',
    name: 'CREW',
    url: '/crew',
  },
  {
    number: '03',
    name: 'TECHNOLOGY',
    url: '/technology',
  },
]

const Header: React.FC = () => {
  const { isActive, setIsActive } = useContext(AppContext)

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={logo} alt=''></img>
        <div className={styles.header__menu}>
          <div className={styles.header__line} />
          <ul className={styles.header__list}>
            {menu.map((menuItem, i) => (
              <li
                key={menuItem.name}
                className={classNames(
                  styles.header__item,
                  isActive !== i ? styles.header__hover : ''
                )}
                onClick={() => setIsActive(i)}>
                <Link
                  to={menuItem.url}
                  className={isActive === i ? styles.header__active : ''}>
                  {menuItem.number} {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
