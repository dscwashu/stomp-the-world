import styles from './MissionHome.module.css'

export function MissionHome() {
  return (
    <div className={styles['missionhome-block']}>
      <div className={styles['image1']}>
        <p>image 1 placeholder</p>
      </div>

      <div className={styles['block2']}>
        <div className={styles['imageGroup']}>
          <div>
            <p> image 2 placeholder </p>
          </div>

          <div>
            <p> image 3 placeholder </p>
          </div>
        </div>
        <div>
          <p>
            The mission of Stomp the World is to provide educational and life
            experiences outside of the classroom.
          </p>
        </div>
      </div>
    </div>
  )
}
