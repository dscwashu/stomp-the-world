import styles from './MissionHome.module.css'
import Image from 'next/image'

export function MissionHome() {
  return (
    <div className={styles['missionhome-block']}>
      <div className={styles['image1']}>
        <Image
          width={300}
          height={300}
          src='/PCS After School 1.jpg'
          alt='overview image'></Image>
      </div>

      <div className={styles['block2']}>
        <div className={styles['imageGroup']}>
          <Image
            width={300}
            height={300}
            src='/MissionImage.png'
            alt='Mission image'></Image>
          <Image
            width={300}
            height={300}
            src='/Cards Game1.jpg'
            alt='overview image'></Image>
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
