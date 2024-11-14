import styles from './Overview.module.css'
import Image from 'next/image'

export function Overview() {
  return (
    <div className={styles['overview-block']}>
      <div className={styles['overview-text']}>
        <p>
          Stomp the World serves students <br></br> in preschool through high school <br></br> in
          the greater St. Louis area through:
        </p>
        <ul>
          <li> Tutoring </li>
          <li> Dance/movement </li>
          <li> Travelling </li>
          <li> After school programs </li>
          <li> Character education </li>
        </ul>
      </div>

      <div>
        <Image
          width={300}
          height={350}
          src='/OverviewPhoto.jpg'
          alt='overview image'></Image>
      </div>
    </div>
  )
}
