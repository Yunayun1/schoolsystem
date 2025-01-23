import Logo from './Logo';
import styles from './homepage.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <h1 className={styles.title}>Royal University of Phnom Penh</h1>
    </header>
  );
};

export default Header;
