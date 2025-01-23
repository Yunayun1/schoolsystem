import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li>
          <Link href="/stuff/home" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link href="/stuff/TeacherManage" className={styles.link}>Teacher</Link>
        </li>
        <li>
          <Link href="/stuff/StudentManage" className={styles.link}>Student</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
