'use client';
import React  from 'react';
import TeacherLayout from '../TeacherLayout/teacherLayout'; // Ensure correct path and export
import styles from '../home/home.module.css';
import Link from 'next/link'; // Import Link for navigation

const Home = () => {
  return (
    <TeacherLayout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Welcome to Your Teacher Dashboard</h1>
        </header>

        <div className={styles.cardContainer}>
          {/* Navigation cards for easy access */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Manage Classes</h2>
            <p className={styles.cardDescription}>
              View and manage all your classes, students, and scores.
            </p>
            <Link href="/teacher/classes" passHref>
              <button className={styles.cardButton}>Go to Classes</button>
            </Link>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Student Performance</h2>
            <p className={styles.cardDescription}>
              Track student performance and make necessary updates.
            </p>
            <Link href="/teacher/performance" passHref>
              <button className={styles.cardButton}>View Performance</button>
            </Link>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Assignments</h2>
            <p className={styles.cardDescription}>
              Create and manage assignments for your students.
            </p>
            <Link href="/teacher/assignments" passHref>
              <button className={styles.cardButton}>Manage Assignments</button>
            </Link>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Settings</h2>
            <p className={styles.cardDescription}>
              Adjust your account settings, preferences, and more.
            </p>
            <Link href="/teacher/settings" passHref>
              <button className={styles.cardButton}>Go to Settings</button>
            </Link>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default Home;
