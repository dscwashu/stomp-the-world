import { Flex } from '@mantine/core'
import styles from './MissionHome.module.css'
import Image from 'next/image'

export function MissionHome() {
  return (
    <div className={styles['mission-block']}>
      <div className={styles['image1']}>
        <Image
          width={200}
          height={200}
          src='/PCS After School 1.jpeg'
          alt='overview image'
        />
      </div>

      <div className={styles['mission-group2']}>
        <div className={styles['imageGroup']}>
          <Image
            width={200}
            height={200}
            src='/MissionImage.png'
            alt='Mission image'
          />
          <Image
            width={200}
            height={200}
            src='/Cards Game1.jpg'
            alt='overview image'
          />
        </div>
        <div className={styles['mission-text']}>
          <p>
            The mission of Stomp the World is to provide educational and life
            experiences outside of the classroom.
          </p>
        </div>
      </div>
    </div>
  )
}
