import { Flex } from '@mantine/core'
import styles from './MissionHome.module.css'
import Image from 'next/image'

export function MissionHome() {
  return (
    <div className={styles['mission-block']}>
      <div className={styles['image1']}>
        <Image
          width={370}
          height={350}
          src='/after_school_program.jpg'
          alt='overview image'
        />
      </div>

      <div className={styles['mission-group2']}>
        <div className={styles['imageGroup']}>
          <Image
            width={350}
            height={250}
            src='/MissionImage.jpg'
            alt='Mission image'
          />
          <Image
            width={250}
            height={250}
            src='/Cards Game1.jpg'
            alt='overview image'
          />
        </div>
        <div className={styles['mission-text']}>
          <p>
            The mission of Stomp the World is to provide educational <br></br> 
            and life experiences outside of the classroom.
          </p>
        </div>
      </div>
    </div>
  )
}
