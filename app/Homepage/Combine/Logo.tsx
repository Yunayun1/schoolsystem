import Image from 'next/image';
import styles from './homepage.module.css';

const Logo = () => {
  return <Image src="/logo.png" alt="Logo" width={100} height={100} className={styles.logo} />;
};

export default Logo;
