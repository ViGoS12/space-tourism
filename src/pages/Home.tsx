import styles from './scss/Home.module.scss'
import Header from '../components/header'

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
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
