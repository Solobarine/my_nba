import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.homeContent}>
        <h1>Welcome To The NBA</h1>
        <Link href='/teams'>See Teams</Link>
      </div>
    </section>
  )
}
