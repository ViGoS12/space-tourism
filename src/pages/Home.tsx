import styles from './scss/Home.module.scss'
import Header from '../components/header'

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__container}>
        <div className={styles.home__leftside}>
          <h2 className={styles.home__subtitle}>SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className={styles.home__title}>SPACE</h1>
          <p className={styles.home__text}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className={styles.home__button}>EXPLORE</button>
      </div>
    </div>
  )
}

export default Home
