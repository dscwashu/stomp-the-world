import styles from './Overview.module.css'

export function Overview() {
  return (
    <div className={styles['overview-block']}>
      <h1>Overview</h1>
      <p>
      Stomp the World serves students in preschool through high school 
      in the greater St. Louis area through:

      - Tutoring
      - Dance/movement
      - Travelling
      - After school programs
      - Character education
      </p>
    </div>
  )
}