import styles from './Footer.module.css';

export default function Footer() {

  console.log('Server Component Footer')

  return (
    <div className={styles.footer}>
        <p>@ By IFSP</p>
    </div>
  )
}
