import React from 'react'
import data from '../../../../data.json'
import Link from 'next/link'
import styles from './page.module.css'
import { TeamProps } from '@/interface/teamProps'

function page({ params }: { params: { id: string } }) {
  console.log(params.id)
  const { teams }: any = data
  const team = teams.filter((team: any) => {
    if (team.idTeam === params.id) {
      const t = {
        strTeam: team.strTeam,
        strTeamShort: team.strTeamShort,
        strStadium: team.strStadium,
        strStadiumThumb: team.strStadiumThumb,
        strStadiumDescription: team.strStadiumDescription,
        strWebsite: team.strWebsite,
        strFacebook: team.strFacebook,
        strTwitter: team.strTwitter,
        strInstagram: team.strInstagram,
        strDescriptionEN: team.strDescriptionEN,
        strTeamBadge: team.strTeamBadge,
        strTeamJersey: team.strTeamJersey,
        strTeamLogo: team.strTeamLogo,
        strTeamFanart1: team.strTeamFanart1,
        strTeamFanart2: team.strTeamFanart2,
        strTeamFanart3: team.strTeamFanart3,
        strYoutube: team.strYoutube
      }

      return t
    }
  }) as TeamProps[]

  console.log(team)

  return team ? (
    <div className={styles.team}>
      <img
        className={styles.logo}
        src={team[0].strTeamBadge}
        alt={team[0].strTeam}
      />
      <h3 className={styles.teamName}>
        {team[0].strTeam} ({team[0].strTeamShort})
      </h3>
      <p className={styles.description}>{team[0].strDescriptionEN}</p>
      <h4 className={styles.heading}>Socials</h4>
      <div className={styles.socials}>
        <Link
          className={styles.socialLink}
          target='_blank'
          href={team[0].strWebsite}>
          <img
            src='/web.svg'
            alt='Official Website'
          />
        </Link>
        <Link
          className={styles.socialLink}
          target='_blank'
          href={team[0].strFacebook}>
          <img
            src='/facebook.svg'
            alt='Facebook Page'
          />
        </Link>
        <Link
          className={styles.socialLink}
          target='_blank'
          href={team[0].strTwitter}>
          <img
            src='/twitter.svg'
            alt='X Handle'
          />
        </Link>
        <Link
          className={styles.socialLink}
          target='_blank'
          href={team[0].strInstagram}>
          <img
            src='/instagram.svg'
            alt='Instagram Handle'
          />
        </Link>
        <Link
          className={styles.socialLink}
          target='_blank'
          href={team[0].strYoutube}>
          <img
            src='/youtube.svg'
            alt='Youtube Channel'
          />
        </Link>
      </div>
      <h4 className={styles.heading}>Stadium</h4>
      <div>
        <img
          className={styles.stadiumImage}
          src={team[0].strStadiumThumb}
          alt={team[0].strTeam + ' ' + 'Stadium'}
        />
        <p>{team[0].strStadiumDescription}</p>
      </div>
      <h3 className={styles.heading}>Kit</h3>
      <div className={styles.jerseyAndLogo}>
        <img
          src={team[0].strTeamJersey}
          alt='Jersey'
        />
        <img
          src={team[0].strTeamLogo}
          alt='Team Logo'
        />
      </div>
      <h3 className={styles.heading}>Fan Arts</h3>
      <div className={styles.fanArt}>
        <img
          src={team[0].strTeamFanart1}
          alt='Fan Art 1'
        />
        <img
          src={team[0].strTeamFanart2}
          alt='Fan Art 2'
        />
        <img
          src={team[0].strTeamFanart3}
          alt='Fan Art 3'
        />
      </div>
    </div>
  ) : (
    <div>
      <p>No NBA Team Found</p>
    </div>
  )
}

export default page
