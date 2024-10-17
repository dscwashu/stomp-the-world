import styles from './EventCard.module.css'
import Image from 'next/image'

export function EventCard() {
  return (
    <div className={styles.event}>
      <h1>After School Program</h1>
      <div className={styles.card}>
        <div>
          <Image
            className={styles.image}
            width={200}
            height={200}
            src='/after_school_program.jpg'
            alt='after school image'></Image>
        </div>
        <p>
          Placeholder placeholder. The placeholder is a placeholder that allows
          placeholders to hold their place. Sign up <a href=''>here!</a>
        </p>
      </div>
    </div>
  )
}
