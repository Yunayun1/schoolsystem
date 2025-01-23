'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li>
          <Link href="/Components/home" className={styles.link}>Home</Link>
        </li>
        <li><Link href="/Components/ManageTeacher" className={styles.link}>Manage Teacher</Link></li>
        <li><Link href="/Components/AddTeacher" className={styles.link}>Add Teacher</Link></li>
        <li><Link href="/Components/ManageStudent" className={styles.link}>Manage Student</Link></li>
        <li><Link href="/Components/AddStudent" className={styles.link}>Add Student</Link></li>
        <li><Link href="/Components/ManageSubject" className={styles.link}>Manage Subject</Link></li>
        <li><Link href="/Components/AddSubject" className={styles.link}>Add Subject</Link></li>
        <li><Link href="/Components/AddEvent" className={styles.link}>Add Event</Link></li>

      </ul>
    </div>
  );
};

export default Sidebar;
