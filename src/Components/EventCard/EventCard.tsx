import styles from './EventCard.module.css'
import Image from 'next/image'

export function EventCard() {
  return (
    <div id='event-card'>
      <h1>After School Program</h1>
      <div className={styles['inner-card']}>
        <p>
          placeholder text placeholder text placeholder placeholder placeholder
          placeholder placeholdeeer
        </p>
        <div className={styles['image']}>
          <Image
            width={300}
            height={300}
            src='/after_school_program.jpg'
            alt='after school image'></Image>
        </div>
      </div>
    </div>
  )
}
