import React from 'react'
import styles from '@/app/page.module.css'
import data from '../../../data.json'
import TeamSnippet from '@/components/teamSnippet'

function page() {
  return (
    <div className={styles.teams}>
      {data.teams.map((team, index) =>
        team ? (
          <TeamSnippet
            key={index}
            params={{
              idTeam: team.idTeam,
              strTeam: team.strTeam,
              strTeamShort: team.strTeamShort,
              strTeamLogo: team.strTeamBadge
            }}
          />
        ) : null
      )}
    </div>
  )
}

export default page
