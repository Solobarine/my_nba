import styles from './dashboard.module.css'

function header() {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src='/nba-logo.svg'
        alt=''
      />
    </div>
  )
}

export default header
