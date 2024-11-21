import styles from './Vision.module.css'

export function Vision() {
  return (
    <section className={styles.vision}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Our Vision</h2>
        <p className={styles.description}>
          The vision of STW is to cultivate bonds that create positive leaders in
          their community through:
        </p>
        <ul className={styles.goals}>
          <li>Continued success through education and experiences</li>
          <li>Utilizing their strengths in the enrichment of their community</li>
          <li>Respecting and embracing our diverse society</li>
        </ul>
      </div>
    </section>
  )
}
