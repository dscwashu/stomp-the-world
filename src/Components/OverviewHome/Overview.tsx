import styles from './Overview.module.css'
import Image from 'next/image'

export function Overview() {
  return (
    <section className={styles.overview}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.heading}>Empowering Students in St. Louis</h2>
          <p className={styles.description}>
            Stomp the World serves students in preschool through high school in
            the greater St. Louis area through comprehensive educational programs.
          </p>
          <ul className={styles.services}>
            <li>One-on-One Tutoring</li>
            <li>Dance & Movement Programs</li>
            <li>Educational Travel Experiences</li>
            <li>Enriching After School Programs</li>
            <li>Character Development Education</li>
          </ul>
        </div>
        
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            width={500}
            height={600}
            src='/OverviewPhoto.jpg'
            alt='Students engaging in educational activities'
            priority
          />
        </div>
      </div>
    </section>
  )
}
