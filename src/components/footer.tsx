import styles from './dashboard.module.css'

function footer() {
  const date = new Date()
  return (
    <p className={styles.footer}>
      Copyright &copy; {date.getFullYear()}. Akpuru Solomon Barine.
      <br />
      <br />
      All Rights Reserved.{' '}
    </p>
  )
}

export default footer
