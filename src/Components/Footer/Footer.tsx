import ContactUs from '../ContactUs/ContactUs'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.headerDiv}>
        <div className={styles.headerFooting}>
          <h3> 6809 Gravois Ave.Saint Louis, MO.63116 </h3>
          <h3> (314) 325-2934 </h3> 
          <h3> stomptheworldorg@gmail.com </h3>
          <h3> 501(c)(3)non-profit organization (45-3681189)</h3>
        </div>
        <div className={styles.footerForm}>
          <h3 className={styles.contactTitle}>Contact Us</h3>
          <ContactUs />
        </div>
        <img src='/logoimage.jpg' alt='Logo' className={styles.footerLogo} />
      </div>
    </footer>
  )
}
