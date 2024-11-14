import ContactUs from '../ContactUs/ContactUs'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.headerDiv}>
        <div className={styles.footerForm}>
        <h3 className={styles.contactTitle}>Contact Us</h3> {/*Contact Us heading */}
          <ContactUs />
        </div>
        <div className={styles.headerFooting}>
          <h3> Stomp the World </h3>
          <h3 className={styles.headerFooting}> @2024 </h3>
        </div>
        <img src="/logoimage.jpg" alt="Logo" className={styles.footerLogo} />
      </div>
    </footer>
  )
}
