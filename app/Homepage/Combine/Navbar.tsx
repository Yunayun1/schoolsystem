import Link from 'next/link';
import styles from '../Combine/homepage.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/Homepage/Home" className={styles.navItem}>Home</Link>
        </li>
        <li>
          <Link href="/Homepage/GPA" className={styles.navItem}>GPA</Link>
        </li>
        <li>
          <Link href="/Homepage/Schedule" className={styles.navItem}>Schedule</Link>
        </li>
        <li>
          <Link href="/Homepage/About" className={styles.navItem}>About Us</Link>
        </li>
        <li>
          <Link href="/Homepage/Help" className={styles.navItem}>Help</Link>
        </li>
        <li>
          <Link href="/Homepage/Account" className={styles.navItem}>Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
