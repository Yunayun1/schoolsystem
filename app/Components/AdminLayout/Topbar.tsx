import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import styles from './Topbar.module.css';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <Image 
        src="/logo.png" 
        alt="University Logo" 
        className={styles.logo} 
        width={150} // Set the width
        height={150} // Set the height
      />
      <h1 className={styles.title}>Royal University of Phnom Penh</h1>
    </div>
  );
};

export default Topbar;
