'use client';

import React, { useState, useEffect } from 'react';
import AdminLayout from '../AdminLayout/adminLayout';
import styles from './ManageTeacher.module.css';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

interface Teacher {
  id: string; // Firebase UID will be a string
  firstName: string;
  lastName: string;
  email: string;
  lastLogin: string;
  joinedDate: string;
}

const ManageTeacherPage = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]); // Initialize state as an empty array

  useEffect(() => {
    const fetchTeachers = async () => {
      const teacherCollection = collection(db, "teacher");
      const teacherSnapshot = await getDocs(teacherCollection);
      const teacherList = teacherSnapshot.docs.map(doc => ({
        id: doc.id,  // Firebase UID for each teacher
        ...doc.data(),
      })) as Teacher[];  // Typecasting the data as Teacher[]
      setTeachers(teacherList); // Update the state with the fetched data
    };

    fetchTeachers();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const deleteTeacher = async (id: string) => {
    // Function to delete teacher from Firestore
    try {
      const teacherRef = doc(db, 'teacher', id);
      await deleteDoc(teacherRef);  // Delete the document
      setTeachers(prevTeachers => prevTeachers.filter(teacher => teacher.id !== id));  // Remove from state
      console.log("Teacher deleted with id:", id);
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  return (
    <AdminLayout>
      {/* Topbar */}
      <div className={styles.topbar}>Manage Teachers</div>

      {/* Red Popup Box */}
      <div className={styles.popupBox}>Teacher Management</div>

      {/* Teacher Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Last Login</th>
            <th>Joined</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.firstName}</td>
              <td>{teacher.lastName}</td>
              <td>{teacher.email}</td>
              <td>{teacher.lastLogin}</td>
              <td>{teacher.joinedDate}</td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteTeacher(teacher.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default ManageTeacherPage;
