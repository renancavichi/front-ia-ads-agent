'use client'
import { useAuthStore } from '@/stores/authStore';
import styles from './Footer.module.css';

export default function Footer() {

  const { userName } = useAuthStore()

  console.log('Server Component Footer')

  return (
    <div className={styles.footer}>
        <p>@ By IFSP </p>
        <p>Logged User: {userName}</p>
    </div>
  )
}
