'use client';

import Header from '../Combine/Header';
import Navbar from '../Combine/Navbar';
import styles from '../GPA/gpa.module.css';

const GPA = () => {
  const handleYearSelect = (year: string) => {
    alert(`You selected Year ${year}`);
    // You can replace this with actual logic to show GPA for the selected year
  };

  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      {/* Wrapper to center the box */}
      <div className={styles.centerWrapper}>
        <div className={styles.box}>
          <h2 className={styles.title}>Choose the Year that you want to select</h2>
          <div className={styles.buttonContainer}>
            <button onClick={() => handleYearSelect('1')} className={styles.yearButton}>Year 1</button>
            <button onClick={() => handleYearSelect('2')} className={styles.yearButton}>Year 2</button>
            <button onClick={() => handleYearSelect('3')} className={styles.yearButton}>Year 3</button>
            <button onClick={() => handleYearSelect('4')} className={styles.yearButton}>Year 4</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPA;
