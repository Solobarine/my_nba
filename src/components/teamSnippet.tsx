import Link from 'next/link'
import styles from './teamSnippet.module.css'

function teamSnippet({
  params
}: {
  params: {
    strTeam: string
    strTeamShort: string
    idTeam: string
    strTeamLogo: string
  }
}) {
  const { strTeam, strTeamLogo, strTeamShort, idTeam } = params
  return (
    <div className={styles.main}>
      <img
        className={styles.logo}
        src={strTeamLogo}
        alt={strTeam}
      />
      <div className={styles.info}>
        <Link href={`/team/${idTeam}`}>{strTeam}</Link>
        <p>{strTeamShort}</p>
      </div>
    </div>
  )
}

export default teamSnippet
