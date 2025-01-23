'use client';

import React from 'react';
import AdminLayout from '../AdminLayout/adminLayout';
import styles from './AddSubject.module.css';

const AddSubjectPage = () => {
  return (
    <AdminLayout>
      {/* Topbar */}
      <div className={styles.topbar}>
        Add Subject
      </div>

      {/* Red Popup Box */}
      <div className={styles.popupBox}>
        Add Subject
      </div>

      {/* Form */}
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="subjectName">Subject Name</label>
          <input type="text" id="subjectName" placeholder="Enter subject name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="department">Department</label>
          <input type="text" id="department" placeholder="Enter department" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="teacherName">Teacher Name</label>
          <input type="text" id="teacherName" placeholder="Enter teacher name" />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddSubjectPage;
