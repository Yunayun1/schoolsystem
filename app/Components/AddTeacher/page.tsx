'use client';

import React from 'react';
import AdminLayout from '../AdminLayout/adminLayout';
import styles from './addTeacher.module.css';

const AddTeacherPage = () => {
  return (
    <AdminLayout>
      {/* Topbar */}
      <div className={styles.topbar}>
        Add Teacher
      </div>

      {/* Red Popup Box */}
      <div className={styles.popupBox}>
        Add Teacher
      </div>

      {/* Form */}
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="Enter first name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Enter last name" />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddTeacherPage;
