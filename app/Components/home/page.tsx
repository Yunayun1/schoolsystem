"use client";

import React, { useEffect, useState } from 'react';
import AdminLayout from '../AdminLayout/adminLayout';
import styles from './home.module.css'; // Make sure to create this CSS module
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { auth, db } from "../../../lib/firebase"; //

const HomePage = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);

  useEffect(() => {
    const fetchStudentCount = async () => {
      const studentsCollection = collection(db, "student"); // Firestore collection
      const snapshot = await getDocs(studentsCollection);
      setStudentCount(snapshot.size); // Set the count based on the number of documents
    };

    fetchStudentCount();

    // Fetch Teacher Count
    const fetchTeacherCount = async () => {
      const teacherCollection = collection(db, "teacher");
      const teacherSnapshot = await getDocs(teacherCollection);
      setTeacherCount(teacherSnapshot.size);
    };

    fetchTeacherCount();
  }, []);

  useEffect(() => {
    // This would be triggered when a teacher logs in (in your login page or authentication logic)
    const handleTeacherLogin = async () => {
      if (auth.currentUser) {
        const teacherRef = doc(db, 'teacher', auth.currentUser.uid);
        await updateDoc(teacherRef, {
          lastLogin: new Date().toISOString(),
        });
        setTeacherCount(prevCount => prevCount + 1);  // Increment teacher count
      }
    };

    handleTeacherLogin();
  }, []);

  const stats = [
    { title: 'Students', value: studentCount, link: '/Components/ManageStudent', color: '#D8B0FF' },  // Red
    { title: 'Teachers', value: teacherCount, link: '/Components/ManageTeacher', color: '#33c1ff' },  // Blue
    { title: 'Departments', value: 0, link: '/Components/ManageDepartment', color: '#4caf50' },      // Green
    { title: 'Subjects', value: 0, link: '/Components/ManageSubject', color: '#f4b400' },             // Yellow
  ];

  return (
    <AdminLayout>
      <div className={styles.dashboard}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={styles.box}
            style={{ backgroundColor: stat.color }}  // Set the background color dynamically
          >
            <div className={styles.boxContent}>
              <h3>{stat.title}</h3>
              <p className={styles.number}>{stat.value}</p>
              <a href={stat.link} className={styles.moreInfo}>
                More Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default HomePage;
