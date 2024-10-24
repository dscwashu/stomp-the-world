import styles from './TitleHome.module.css'

export function TitleHome() {
  return (
    <div className={styles['vision-block']}>
      <h1>Vision</h1>
      <p>
        The vision of STW is to cultivate bonds that create positive leaders in
        their community by:{' '}
      </p>
      <ul>
        <li> Continued success through education and experiences </li>
        <li>
          {' '}
          Utilizing their strengths in the enrichment of their community{' '}
        </li>
        <li> Respecting and embracing our diverse society </li>
      </ul>
    </div>
  )
}
